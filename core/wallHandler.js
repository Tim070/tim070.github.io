AFRAME.registerComponent("ofset-wall", {
  init: function () {
    this.el.object3D.position.x += 2.5;
    this.el.object3D.position.y += 2.5;
    this.el.object3D.position.z += 2.5;
  },
});

AFRAME.registerComponent("setup-world", {
  init: function () {
    this.world = document.querySelector("#world");
    //this.mapToLoad = [["1 ","3 ","3 ","3 ","3 ","3 ","3 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","6 ","6 ","6 ","6 ","2 ","2 ","6 ","6 ","2 ","1 "],["3 ","0","0","0","0","0","e ","3 ","3 ","3 ","1 ","1 ","3 ","3 ","6 ","3 ","1 ","1 ","6 ","6 ","6 ","6 ","6 ","6 ","6 ","6 ","0","0","0","0","0","0","0","0","0","6 "],["3 ","0","0","0","3 ","0","0","3 ","0","0","3 ","3 ","0","0","0","0","3 ","6 ","0","0","0","0","0","0","0","6 ","0","0","6 ","2 ","2 ","6 ","2 ","0","0","2 "],["3 ","0","0","0","3 ","0","0","3 ","0","0","3 ","3 ","0","0","0","0","0","0","0","e ","7 ","0","0","6 ","0","6 ","0","0","0","0","0","0","6 ","0","0","6 "],["3 ","0","0","0","3 ","0","0","3 ","0","e ","0","0","0","0","6 ","3 ","6 ","6 ","0","0","0","0","0","6 ","0","6 ","0","0","0","0","0","e ","6 ","0","0","2 "],["3 ","0","0","0","3 ","0","0","3 ","0","e ","0","0","0","0","3 ","1 ","1 ","6 ","0","0","0","0","0","6 ","0","6 ","6 ","6 ","0","0","6 ","2 ","2 ","0","0","2 "],["3 ","0","0","0","3 ","0","0","3 ","0","e ","0","0","0","0","6 ","1 ","1 ","6 ","0","0","0","0","0","6 ","0","0","0","0","0","e ","6 ","2 ","0","0","0","2 "],["3 ","e ","7 ","e ","3 ","0","0","0","0","0","0","0","0","0","3 ","1 ","1 ","6 ","0","0","0","0","0","6 ","0","6 ","6 ","6 ","6 ","6 ","6 ","2 ","0","0","0","2 "],["3 ","0","0","0","3 ","0","0","0","0","0","0","3 ","3 ","0","3 ","1 ","1 ","6 ","0","0","0","0","0","6 ","6 ","6 ","0","6 ","2 ","2 ","2 ","2 ","0","e ","0","2 "],["3 ","0","0","0","3 ","3 ","3 ","3 ","3 ","3 ","3 ","1 ","1 ","3 ","1 ","1 ","1 ","6 ","0","e ","0","0","0","0","0","0","0","6 ","2 ","e ","0","0","0","0","0","2 "],["3 ","0","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","1 ","6 ","0","0","0","0","0","0","0","0","0","6 ","2 ","0","0","0","0","0","0","2 "],["3 ","0","5 ","0","0","0","0","0","0","0","0","0","0","0","0","0","5 ","6 ","0","7 ","0","e ","0","0","0","7 ","0","6 ","2 ","0","2 ","2 ","2 ","2 ","2 ","1 "],["3 ","0","5 ","0","0","0","0","0","0","7 ","0","0","0","0","0","0","5 ","6 ","0","0","0","0","0","0","0","0","0","6 ","2 ","0","0","0","0","0","2 ","1 "],["1 ","5 ","5 ","0","0","0","7 ","0","0","0","e ","0","7 ","0","0","0","5 ","1 ","6 ","6 ","6 ","6 ","6 ","6 ","6 ","6 ","6 ","6 ","2 ","0","0","0","0","0","0","2 "],["5 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","5 ","1 ","1 ","1 ","5 ","5 ","2 ","2 ","5 ","2 ","5 ","2 ","5 ","2 ","2 ","2 ","2 ","2 ","0","2 "],["5 ","0","5 ","0","0","0","7 ","0","0","0","e ","0","7 ","0","0","0","5 ","1 ","1 ","5 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","2 "],["5 ","0","5 ","0","0","0","0","0","0","7 ","0","0","0","0","0","0","5 ","5 ","5 ","0","0","0","0","0","0","0","e ","0","0","0","0","0","7 ","0","e ","2 "],["5 ","0","5 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","2 "],["5 ","sn","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","5 ","2 ","2 ","5 ","5 ","2 ","5 ","2 ","2 ","2 ","2 ","2 ","1 "],["1 ","5 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 "]];
    this.mapToLoad = [["1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","e ","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1l","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1h","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","6 ","0","0","0","6 ","0","0","0","0","0","0","0","0","0","1l","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","7 ","0","0","0","0","0","0","0","7 ","0","0","0","0","0","0","0","1h","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","7 ","7 ","7 ","7 ","7 ","7 ","7 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1l","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1h","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1 "],["1 ","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","sn","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1 "],["1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 ","1 "]]
    this.player = document.querySelector("#playerEntity")
    this.allWalls= ""

    this.getWallColor = (wallVal) => {
      switch (+wallVal) {
        case 1:
          return "#64c864";
          break;
        case 2:
          return "#c86464";
          break;
        case 3:
          return "#6464c8";
          break;
        case 4:
          return "#e1ff00";
          break;
        case 5:
          return "#a52a2a";
          break;
        case 6:
          return "#800080";
          break;
        case 7:
          return "#808080";
          break;
        case 8:
          return "#000000";
          break;
        case 9:
          return "#FFFFFF";
          break;
        default:
          return "#ff0000";
      }
    };

    let xToMoveTo = 0;
    let zToMoveTo = 0;

    let currentZpos = 0;

    for (const mapRow in this.mapToLoad) {
      let currentXpos = 0;
      for (const mapCell in this.mapToLoad[mapRow]) {
        if (!isNaN(+this.mapToLoad[mapRow][mapCell].substr(0,1)) && +this.mapToLoad[mapRow][mapCell] !== 0) {
          const wallEl = document.createElement("a-box");
          let posString = ""
          let mixString = ""
          wallEl.setAttribute("aabb-collider", "objects: .playerhead;")
          if (this.mapToLoad[mapRow][mapCell].trim().length > 1){
            wallEl.setAttribute("mixin", "halfwall");
            wallEl.setAttribute(
                "position",
                currentXpos.toString() + (this.mapToLoad[mapRow][mapCell].substr(1,1) === "h" ? " 1.25 " : " -2.5 ") + currentZpos.toString()
            );
            posString = currentXpos.toString() + (this.mapToLoad[mapRow][mapCell].substr(1,1) === "h" ? " 1.25 " : " -2.5 ") + currentZpos.toString()
            mixString = "halfwall"
            const walkEl = document.createElement("a-entity");
            walkEl.setAttribute("mixin", "walkable")
            walkEl.setAttribute("position", (currentXpos + 2.5).toString() + (this.mapToLoad[mapRow][mapCell].substr(1,1) === "h" ? " 0.01 " : " 1.26 ") + (currentZpos + 2.5).toString())
            this.world.appendChild(walkEl);
          } else {
            wallEl.setAttribute("mixin", "wall");
            wallEl.setAttribute(
                "position",
                currentXpos.toString() + " 0 " + currentZpos.toString()
            );
            posString = currentXpos.toString() + " 0 " + currentZpos.toString()
            mixString = "wall"
          }
          wallEl.id = "wall|" + currentXpos.toString() + "|" + currentZpos.toString()+"|"
          wallEl.className = "wall";

          wallEl.setAttribute(
            "color",
            this.getWallColor(this.mapToLoad[mapRow][mapCell].substr(0,1))
          );
          this.allWalls += " <a-box mixin='" + mixString + "' id='wall|" + currentXpos.toString() + "|" + currentZpos.toString()+"|' class='wall' position='" + posString + "' ></a-box>"
          this.world.appendChild(wallEl)
        } else {
          const walkEl = document.createElement("a-entity");
          walkEl.setAttribute("mixin", "walkable")
          walkEl.setAttribute("position", (currentXpos + 2.5).toString() + " 0.01 " + (currentZpos + 2.5).toString())
          this.world.appendChild(walkEl);

          if(this.mapToLoad[mapRow][mapCell].substr(0, 1) === "s"){
            xToMoveTo = currentXpos + 2.5
            zToMoveTo = currentZpos + 2.5
            switch (this.mapToLoad[mapRow][mapCell].substr(1, 1)){
              case "e":
                this.player.object3D.rotation.y = Math.PI * 1.5
                break;
              case "s":
                this.player.object3D.rotation.y = Math.PI
                break;
              case "w":
                this.player.object3D.rotation.y = Math.PI / 2
                break;
              default:
                this.player.object3D.rotation.y = 0
                break;
            }
          } else if(this.mapToLoad[mapRow][mapCell].substr(0, 1) === "e"){
            const enemy = document.createElement("a-entity")
            enemy.setAttribute("build-enemy", "health:10; enemyName:" + currentXpos + "-" + currentZpos)
            enemy.setAttribute("position", (currentXpos + 2.5) .toString() + " 1.5 " + (currentZpos + 2.5))
            this.world.appendChild(enemy)
          }
        }
        currentXpos += 5;
      }
      currentZpos += 5;
    }
    document.querySelector("#wallWorld").innerHTML += " <a-entity geometry-merger=\"preserveOriginal: false\" material=\"color: #6464c8; roughness:1; side:double\">" + this.allWalls + "</a-entity> /n "
    this.player.object3D.position.x = xToMoveTo
    this.player.object3D.position.z = zToMoveTo
  },

});

AFRAME.registerComponent("no-move-through-wals", {
  init: function () {
    this.el.addEventListener("hit", (e) => {
      if(e.detail.el.className === "wall"){
        const targetToMoveAwayFrom = new THREE.Vector3();
        e.detail.el.object3D.getWorldPosition(targetToMoveAwayFrom);
        const currentPos = new THREE.Vector3(this.el.object3D.position.x, this.el.object3D.position.y, this.el.object3D.position.z);
         this.el.object3D.getWorldPosition(currentPos)

        if(currentPos.x < (targetToMoveAwayFrom.x - 2.5)){
          document.querySelector("#playerEntity").object3D.position.x -= 0.05
        } else if(currentPos.x > (targetToMoveAwayFrom.x + 2.5)){
          document.querySelector("#playerEntity").object3D.position.x += 0.05
        } else if(currentPos.z < (targetToMoveAwayFrom.z - 2.5)){
          document.querySelector("#playerEntity").object3D.position.z -= 0.05
        } else if(currentPos.z > (targetToMoveAwayFrom.z + 2.5)){
          document.querySelector("#playerEntity").object3D.position.z += 0.05
        }

      }
    });
  },
});