AFRAME.registerComponent("fly-forward", {
  schema: { type: "string" },

  init: function () {
    this.speed = this.data;
    this.age = 0;
    this.el.addEventListener("hit", (e) => {
      if(this.el.parentNode !== null){
        this.el.parentNode.removeChild(this.el);
      }
    });
  },
  tick: function () {
    this.el.object3D.translateZ(this.speed);
    this.age++;
    this.worldPos = new THREE.Vector3()
    this.el.object3D.getWorldPosition(this.worldPos)
    if (this.age > 100 / this.speed || this.worldPos.y < 0) {
      this.el.parentNode.removeChild(this.el);
    }
  },
});

AFRAME.registerComponent("gun-code", {
  init: function () {
    this.gunsHandler = new Guns_handler()
    this.handOrb = document.querySelector("#thegun");
    this.hand = document.querySelector("#RightHand");
    this.gunwheel = document.querySelector("#gunWheel");
    this.equipedGun = this.gunsHandler.getGun(0)
    this.selectedSwitch = "0";

    this.el.addEventListener("bbuttondown", (e) => {
      this.gunwheel.object3D.position.setFromMatrixPosition(this.hand.object3D.matrixWorld);
      this.gunwheel.components.animation.animation.reverse();
      this.gunwheel.components.animation.animation.play();
    });
    this.el.addEventListener("bbuttonup", (e) => {
      this.gunwheel.components.animation.animation.reverse();
      this.gunwheel.components.animation.animation.play();
      if(this.selectedSwitch !== "" && this.selectedSwitch !== this.equipedGun){
        this.equipedGun = this.gunsHandler.getGun(+this.selectedSwitch)
        console.log(this.equipedGun.name)
      }
    });
  },
  tick: function () {
    this.handOrb.object3D.position.copy(this.hand.object3D.position);

    const handRot = this.hand.object3D.rotation;
    handRot.order = "YZX"
    if(handRot.x !== 0){
      handRot.x += 1.5
    }
    this.handOrb.object3D.setRotationFromEuler(handRot);
  },
});

AFRAME.registerComponent("fireable", {
  schema: { friendly: {type: "boolean"}, origin: {type: "string", default: "self"} },
  init: function () {
    this.inputParams = this.data
    this.gunToShoot = ( this.el.components["gun-code"] === undefined ? this.el.components["enemyGunStorage"].equipedGun : this.el.components["gun-code"].equipedGun);

    if (this.inputParams.origin === "self") {
      this.inputParams.origin = this.el.id
    }

    this.el.addEventListener("triggerdown", () => {this.fire(this.inputParams)});
  },
  fire: async function (inputParams)
  {
    this.gunToShoot = (this.el.components["gun-code"] === undefined ? this.el.components["enemyGunStorage"].equipedGun : this.el.components["gun-code"].equipedGun);
    for (let i = 0; i < this.gunToShoot.burst; i++)
    {
      for (let j = 0; j < this.gunToShoot.bulletCount; j++)
      {
        const bullet = document.createElement("a-sphere");
        let hand = document.querySelector("#" + inputParams.origin);
        const currentPos = new THREE.Vector3(0, 0, 0);
        hand.object3D.getWorldPosition(currentPos);
        bullet.object3D.position.set(currentPos.x, currentPos.y, currentPos.z);
        const currentDir = new THREE.Quaternion();
        hand.object3D.getWorldQuaternion(currentDir);
        currentDir.x += ((Math.random() * this.gunToShoot.bulletSpread) - (this.gunToShoot.bulletSpread / 2))
        currentDir.y += ((Math.random() * this.gunToShoot.bulletSpread) - (this.gunToShoot.bulletSpread / 2))
        currentDir.z += ((Math.random() * this.gunToShoot.bulletSpread) - (this.gunToShoot.bulletSpread / 2))
        currentDir.w += ((Math.random() * this.gunToShoot.bulletSpread) - (this.gunToShoot.bulletSpread / 2))
        bullet.object3D.setRotationFromQuaternion(currentDir);

        bullet.setAttribute("fly-forward", this.gunToShoot.bulletSpeed);
        bullet.setAttribute(inputParams.friendly ? "friendly-bullet" : "enemy-bullet", "");
        bullet.setAttribute("material", "shader: flat; side: back;");
        bullet.setAttribute("radius", this.gunToShoot.bulletSize);
        bullet.setAttribute("aabb-collider", "objects: .wall, .restartButton" + (inputParams.friendly ? ", .enemy" : ", .playerhead"));

        const bulletShader = document.createElement("a-sphere");
        bulletShader.object3D.position.set(0, 0, 0);
        bulletShader.setAttribute("color", "#000000");
        bulletShader.setAttribute("material", "shader: flat; side: back;");
        bulletShader.setAttribute("radius", this.gunToShoot.bulletSize * 1.1 + 0.01);

        bullet.appendChild(bulletShader);
        document.querySelector("a-scene").appendChild(bullet);
      }
      await new Promise(r => setTimeout(r, 100));
    }
  },
});

AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.hand = document.querySelector("#RightHand")
    this.el.addEventListener('raycaster-intersected', (e) => {
      this.el.setAttribute("material", "shader: flat;color: #0076ff")
      this.hand.components["gun-code"].selectedSwitch = this.el.id
    });
    this.el.addEventListener('raycaster-intersected-cleared', (e) => {
      this.el.setAttribute("material", "shader: flat;color: #000000")
      if(this.hand.components["gun-code"].selectedSwitch === this.el.id)
      {
        this.hand.components["gun-code"].selectedSwitch = ""
      }
    });
  }
});

AFRAME.registerComponent("enemyGunStorage", {
  init: function () {
    this.gunsHandler = new Guns_handler()
    this.equipedGun = this.gunsHandler.getGun(Math.floor(Math.random() * 5))
  },
})

AFRAME.registerComponent("display-plate", {
  init: function () {

  },

  tick: function () {

  }
})
