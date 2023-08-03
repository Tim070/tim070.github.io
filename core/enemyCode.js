AFRAME.registerComponent("enemy", {
    schema: { health: {type: "number"}, healthbar: {type:"string"} },

    init: function () {
        this.health = this.data.health;
        this.el.addEventListener("damageTaken", () => {


            document.querySelector("#" + this.data.healthbar).emit("deactivate-pip", {pip: this.health - 1}, true)
            this.health--

            if(this.health === 0){
                this.el.parentNode.removeChild(this.el);
            }
        });
    },
    tick: function () {
    },
});

AFRAME.registerComponent("look-at-obj", {
    schema: { type: "string" },

    init: function () {
        this.objToLookAt = document.querySelector("#" + this.data);
    },
    tick: function () {
        const placeToLookTo = new THREE.Vector3();
        this.objToLookAt.object3D.getWorldPosition(placeToLookTo)
        this.el.object3D.lookAt(placeToLookTo)
    },
});

AFRAME.registerComponent("turn-to-obj", {
    schema: { type: "string" },

    init: function () {
        this.objToLookAt = document.querySelector("#" + this.data);
    },
    tick: function () {
        const placeToLookTo = new THREE.Vector3();
        this.objToLookAt.object3D.getWorldPosition(placeToLookTo)
        const placeToLookFrom = new THREE.Vector3();
        this.el.object3D.getWorldPosition(placeToLookFrom)
        placeToLookTo.y = placeToLookFrom.y
        this.el.object3D.lookAt(placeToLookTo)
    },
});

AFRAME.registerComponent("auto-shoot", {
    schema: { delay: {type: "number"} },
    init: function () {
        this.throttledFunction = AFRAME.utils.throttle(this.everyXSeconds, 1000 * +this.data.delay, this);
    },

    everyXSeconds: function () {
        this.el.emit("triggerdown")
    },

    tick: function (t, dt) {
        this.throttledFunction();
    },
});

AFRAME.registerComponent("enemy-bullet", {
    init: function () {
        this.el.addEventListener("hit", (e) => {
            if(e.detail.el.className === "playerhead"){
                document.querySelector('#playerEntity').emit("damageTaken", {}, true)
            }
        });
    },
});

AFRAME.registerComponent("friendly-bullet", {
    init: function () {
        this.el.addEventListener("hit", (e) => {
            if(e.detail.el.className === "enemy"){
                e.detail.el.emit("damageTaken", {}, true)
            } else if(e.detail.el.className === "restartButton"){
                window.location.reload()
            }
        });
    },
});

AFRAME.registerComponent("build-enemy", {
    schema: { enemyName: {type: "string"}, health: {type: "number"} },
    init: function () {
        this.el.setAttribute("enemyGunStorage", "")
        this.el.setAttribute("enemy", "health:" + this.data.health.toString() + "; healthbar:Enhealthbar" + this.data.enemyName)
        this.el.setAttribute("class","enemy")
        this.el.setAttribute("fireable", "friendly: false; origin:Enhead" + this.data.enemyName)
        this.el.setAttribute("auto-shoot", "delay:1")
        this.el.setAttribute("color", "#000000")
        this.el.id = this.data.enemyName

        const HB = document.createElement("a-plane")
        HB.id = "Enhealthbar" + this.data.enemyName
        HB.setAttribute("look-at-obj","playercamera")
        HB.setAttribute("health-bar","totalhealth:" + this.data.health.toString())
        HB.setAttribute("color", "#666666")
        HB.setAttribute("position", "0 1.6 0.01")
        HB.setAttribute("height", "0.15")
        HB.setAttribute("width", "2.8")
        this.el.appendChild(HB)

        const ENM = document.createElement("a-entity")
        ENM.setAttribute("class","enemy")
        ENM.setAttribute("gltf-model","#enemyModel")
        ENM.setAttribute("turn-to-obj","playercamera")
        ENM.object3D.position.y = -1.5
        ENM.object3D.scale.x = 0.5
        ENM.object3D.scale.y = 0.5
        ENM.object3D.scale.z = 0.5
        this.el.appendChild(ENM)

        const ORG = document.createElement("a-entity")
        ORG.object3D.position.y += 4
        ORG.id = "Enhead" + this.data.enemyName
        ORG.setAttribute("look-at-obj","playercamera")

        ENM.appendChild(ORG)

        // const CL = document.createElement("a-cylinder")
        // CL.setAttribute("color", "#999999")
        // CL.setAttribute("radius", "0.4")
        // CL.setAttribute("height", "1.5")
        // CL.setAttribute("position", "0 -0.5 0")
        // CL.setAttribute("class", "enemy")
        // this.el.appendChild(CL)

        // const SP = document.createElement("a-sphere")
        // SP.setAttribute("look-at-obj","playercamera")
        // SP.setAttribute("radius", "0.5")
        // SP.setAttribute("position", "0 0.65 0")
        // SP.setAttribute("color", "#999999")
        // SP.setAttribute("class", "enemy")
        // SP.id = "Enhead" + this.data.enemyName
        // this.el.appendChild(SP)
        //
        // const LE = document.createElement("a-sphere")
        // const RE = document.createElement("a-sphere")
        // LE.setAttribute("scale", "0.1 0.2 0.1")
        // RE.setAttribute("scale", "0.1 0.2 0.1")
        // LE.setAttribute("color", "#000000")
        // RE.setAttribute("color", "#000000")
        // LE.setAttribute("material", "shader:flat")
        // RE.setAttribute("material", "shader:flat")
        // LE.setAttribute("position", "-0.15 0.1 0.5")
        // RE.setAttribute("position", "0.15 0.1 0.5")
        //
        // SP.appendChild(LE)
        // SP.appendChild(RE)
        //
        // const SH = document.createElement("a-entity")
        // SH.setAttribute("mixin", "shadow")
        // SH.setAttribute("position", "0 -1.4 0")
        // this.el.appendChild(SH)
    },
});

