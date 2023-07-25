AFRAME.registerComponent("player", {
    schema: {healthbar: {type: "string"}, healthtotal: {type: "number"}},

    init: function ()
    {
        this.health = this.data.healthtotal
        this.el.addEventListener("damageTaken", () =>
        {
            document.querySelector("#" + this.data.healthbar).emit("deactivate-pip", {pip: this.health - 1}, true)
            this.health--

            if (this.health === 0)
            {
                this.el.object3D.position.x = -20
                this.el.object3D.position.y = 10
                this.el.object3D.position.z = -20
            }
        });
    },
});

AFRAME.registerComponent("playerspeedcontrols", {
    init: function ()
    {
        this.el.addEventListener("thumbstickdown", () =>
        {
            this.el.setAttribute("smooth-locomotion", "target: #playerEntity; reference: #playercamera; moveSpeed:5.0; inputMode: analog;")
        })
        this.el.addEventListener("thumbstickup", () =>
        {
            this.el.setAttribute("smooth-locomotion", "target: #playerEntity; reference: #playercamera; moveSpeed:2.5; inputMode: analog;")
        })
    },
});

AFRAME.registerComponent("playerjumpcontrols", {
    init: function ()
    {
        this.playerentity = document.querySelector("#playerEntity")
        this.el.addEventListener("abuttondown", () =>
        {
            if(this.playerentity.hasAttribute("gravity")) {
                this.playerentity.components["gravity"].velocity.y = 7.5;
            }
        })
    },
    tick: function ()
    {
        // if ((this.playerentity.components["gravity"]).velocity.y !== 0) {
        //     console.log((this.playerentity.components["gravity"]).velocity);
        // }
    }
});