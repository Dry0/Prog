class App {
    runApplication() {
        let canvas = document.getElementById("canvas");
        let g = canvas.getContext("2d");
        this.drawHouse(g, "red", 1100, 330);
        this.drawDoor(g, 1050, 455)

        this.drawHouse(g, "yellow", 150, 330);
        this.drawDoor(g, 100, 455)

        this.drawHouse(g, "green", 700, 330);
        this.drawDoor(g, 650, 455)

        this.drawHouse(g, "brown", 750, 825);
        this.drawDoor(g, 700, 950)

        this.drawHouse(g, "orange", 1150, 825);
        this.drawDoor(g, 1100, 950)

        this.drawHouse(g, "blue", 300, 825);
        this.drawDoor(g, 250, 950)

        this.drawTrunk(g, 480, 450);
        this.drawTree(g, 500, 430);
        this.drawTree(g, 470, 460);
        this.drawTree(g, 530, 460);

        this.drawSnowman(g, 330, 500);
        this.drawUpman(g, 330, 450);
        this.drawButton(g, 340, 450);
        this.drawButton(g, 320, 450);
        this.drawButton(g, 330, 460);

        this.drawTrunk(g, 100, 950);
        this.drawTree(g, 120, 920);
        this.drawTree(g, 90, 950);
        this.drawTree(g, 150, 950);

        this.drawSnowman(g, 900, 500);
        this.drawUpman(g, 900, 450);
        this.drawButton(g, 910, 450);
        this.drawButton(g, 890, 450);
        this.drawButton(g, 900, 460);

        this.drawSnowman(g, 550, 1000);
        this.drawUpman(g, 550, 950);
        this.drawButton(g, 560, 950);
        this.drawButton(g, 540, 950);
        this.drawButton(g, 550, 960);

        this.drawTrunk(g, 1300, 460);
        this.drawTree(g, 1320, 430);
        this.drawTree(g, 1290, 460);
        this.drawTree(g, 1350, 460);

        this.drawSnowman(g, 1320, 1000);
        this.drawUpman(g, 1320, 950);
        this.drawButton(g, 1330, 950);
        this.drawButton(g, 1310, 950);
        this.drawButton(g, 1320, 960);

        // this.drawText(g,100, 200);

        this.drawRoad(g, 700, 330);
        this.drawRoadLines(g, 900, 500);

    }

    drawSnowman(g, x, y) {
        g.fillStyle = "white";
        g.beginPath();
        g.arc(x, y, 30, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.arc(x, y, 30, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

    }

    drawUpman(g, x, y) {
        g.fillStyle = "white";
        g.beginPath();
        g.arc(x, y, 25, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.arc(x, y, 25, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
    }

    drawButton(g,x,y) {
        g.fillStyle = "black";
        g.beginPath();
        g.arc(x, y, 4, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.arc(x, y, 4, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

    }

    drawHouse(g, color, x, y) {
        g.fillStyle = color;
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + 80, y + 80)
        g.lineTo(x + 80, y + 200)
        g.lineTo(x - 80, y + 200)
        g.lineTo(x - 80, y + 80)
        g.closePath();
        g.stroke();
        g.fill();
    }

    drawDoor(g, x, y) {
        g.fillStyle = "black";
        g.beginPath();
        g.moveTo(x, y);
        g.rect(x, y, 40, 75);
        g.closePath()
        g.stroke();
        g.fill();

    }

    drawTree(g, x, y) {
        g.fillStyle = "green";
        g.beginPath();
        g.arc(x, y, 35, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.arc(x, y, 35, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

    }

    drawTrunk(g, x, y) {
        g.fillStyle = "brown";
        g.beginPath();
        g.moveTo(x, y);
        g.rect(x, y, 40, 75);
        g.closePath()
        g.stroke();
        g.fill();

    }

    drawRoad(g,x,y) {
        g.beginPath()
        g.fillStyle = "grey";
        g.rect(0, 550, 1600, 55)
        g.rect(0, 1050, 1600, 55)
        g.rect(canvas.width/2 +200, 600, 70, 500);
        g.rect(canvas.width/4 +50, 600, 70, 500);
        g.closePath();
        g.fill();
    }
    drawText(g,x,y ) {
        g.font = "50px Comic Sans MS";
        g.fillStyle = "red";
        g.textAlign = "center";
        g.fillText("Merry Christmas");

    }

    
   

    // drawRoadLines(g,x,y) {
    //     g.strokeStyle = "red"
    //     g.setLineDash([6,6]);
    //     g.beginPath();
    //     g.moveTo(0,320);
    //     g.lineTo(canvas.width, 320);
    //     g.stroke();
    //     g.moveTo(0,520);
    //     g.lineTo(canvas.width/2 + 100, 520);
    //     g.stroke();
    // }

    // drawText(g,x,y ) {
    //     g.font = "250px Tahoma";
    //     g.fillStyle = "red";
    //     g.textAlign = "center";
    //     g.fillText = "2023, canvas.width/2, canvas/height/1.64";
    
    //     }

    // Merry Christmas sign!

    //    signChristmas(g, x, y) {
    //     g.font = "50px Comic Sans MS";
    //     g.fillStyle = "red";
    //     g.textAlign = "center";
    //     g.fillText("Merry Christmas");

    }
    

let app = new App();

app.runApplication();







// drawTrunk(g, x, y){
//     g.fillStyle = "brown";
//     g.beginPath();
//     g.moveTo(x, y);
//     g.lineTo(x + 50, y + 50)
//     g.lineTo(x + 50, y + 50)
//     g.lineTo(x - 50, y + 50)
//     g.lineTo(x - 50, y + 50)
//     g.closePath();
//     g.stroke();
//     g.fill();
// zo maak je een driehoek!


// Merry Christmas sign!
//    signChristmas(g, x, y) {
//     g.font = "50px Comic Sans MS";
//     g.fillStyle = "red";
//     g.textAlign = "center";
//     g.fillText("Merry Christmas");
       