AFRAME.registerComponent("fly-forward", {
  schema: { type: "string" },

  init: function () {
    this.speed = this.data;
    this.age = 0;
    this.el.addEventListener("hit", (e) => {
      this.el.parentNode.removeChild(this.el);
    });
  },
  tick: function () {
    this.el.object3D.translateZ(this.speed);
    this.age++;
    this.worldPos = new THREE.Vector3()
    this.el.object3D.getWorldPosition(this.worldPos)
    if (this.age > 5000 / this.speed || this.worldPos.y < 0) {
      this.el.parentNode.removeChild(this.el);
    }
  },
});

AFRAME.registerComponent("gun-code", {
  init: function () {
    this.handOrb = document.querySelector("#thegun");
    this.hand = document.querySelector("#RightHand");
  },
  tick: function () {

    this.handOrb.object3D.position.set(
      this.hand.object3D.position.x,
      this.hand.object3D.position.y,
      this.hand.object3D.position.z
    );
    const handRot = this.hand.object3D.rotation;
    handRot.x += 1.5
    handRot.order = "YZX"
    this.handOrb.object3D.setRotationFromEuler(handRot);
  },
});

AFRAME.registerComponent("fireable", {
  schema: { friendly: {type: "boolean"}, origin: {type: "string", default: "self"} },
  init: function () {
    this.inputParams = this.data

    if (this.inputParams.origin === "self") {
      this.inputParams.origin = this.el.id
    }

    this.el.addEventListener("triggerdown", () => {this.fire(this.inputParams)});
  },
  fire: function (inputParams) {
    const bullet = document.createElement("a-sphere");
    let hand = document.querySelector("#" + inputParams.origin);
    const currentPos = new THREE.Vector3(0, 0, 0);
    hand.object3D.getWorldPosition(currentPos);
    bullet.object3D.position.set(currentPos.x, currentPos.y, currentPos.z);
    const currentDir = new THREE.Quaternion();
    hand.object3D.getWorldQuaternion(currentDir);
    bullet.object3D.setRotationFromQuaternion(currentDir);

    bullet.setAttribute("fly-forward", inputParams.friendly ? "0.5" : "0.1");
    bullet.setAttribute(inputParams.friendly ? "friendly-bullet" : "enemy-bullet", "");
    bullet.setAttribute("material", "shader: flat; side: back;");
    bullet.setAttribute("radius", "0.05");
    bullet.setAttribute("aabb-collider", "objects: .wall, .restartButton" + (inputParams.friendly ? ", .enemy" : ", .playerhead"));

    const bulletShader = document.createElement("a-sphere");
    bulletShader.object3D.position.set(0, 0, 0);
    bulletShader.setAttribute("color", "#000000");
    bulletShader.setAttribute("material", "shader: flat; side: back;");
    bulletShader.setAttribute("radius", "0.06");

    bullet.appendChild(bulletShader);
    document.querySelector("a-scene").appendChild(bullet);
  },
});

AFRAME.registerComponent("display-plate", {
  init: function () {

  },

  tick: function () {

  }
})
