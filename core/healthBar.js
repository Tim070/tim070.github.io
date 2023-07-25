AFRAME.registerComponent("health-bar", {
    schema: { totalhealth: {type: "number"} },

    init: function () {
        this.allPips = []
        this.maxHealth = +this.data.totalhealth
        this.healthbarWidth = +this.el.getAttribute("width")
        this.widthPerPip = this.healthbarWidth / this.maxHealth
        this.pipSpacing = this.widthPerPip * 0.1
        this.widthPerPip *= 0.9
        for (let i = 0; i < this.maxHealth; i++)
        {
            const healthPip = document.createElement("a-plane")
            healthPip.setAttribute("className", "healthblock")
            healthPip.setAttribute("position", ((-this.healthbarWidth / 2) + (this.widthPerPip / 2) + (this.pipSpacing / 2) + ((this.widthPerPip + this.pipSpacing) * i)).toString() + " 0 0.01")
            healthPip.setAttribute("color", "#054B0B")
            healthPip.setAttribute("height", "0.1")
            healthPip.setAttribute("width", this.widthPerPip.toString())
            this.el.appendChild(healthPip)
            this.allPips.push(healthPip)
        }



        this.el.addEventListener("deactivate-pip", (e) => {
            const blockToDeactivate = this.allPips[e.detail.pip]
            blockToDeactivate.setAttribute("color", "rgb(131,26,26)")
        });
    },
    tick: function () {
    },
});