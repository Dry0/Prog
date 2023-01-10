class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasID");
        console.log(canvas)
        let g = canvas.getContext("2d");

       
        //line
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(200,500);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill()


        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()


        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(600,400);
        g.lineTo(700,200);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill()


        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(600,600);
        g.lineTo(600,400);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.closePath();
        g.stroke();
        g.fill()


        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(250,400);
        g.lineTo(250,300);
        g.lineTo(350,300);
        g.lineTo(350,400);
        g.closePath();
        g.stroke();
        g.fill()

        //https://github.com/progsen/jsopdrachtM2/blob/main/Les%202%20opdrachten.md verder in de opdr

        // normal window
        //g.moveTo(250,500);
        //g.lineTo(250,400);
        //g.lineTo(350,400);
        //g.lineTo(350,500);
        
    }
}

let app = new App();

app.runApplication();
