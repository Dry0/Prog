class App
{
    runApplication()
    {
        console.log("hello world");
        // code gaat hier!
        let canvas = document.getElementById("canvas");
        let g = canvas.getContext("2d");
        this.tekenKerstBoom(g,300, 200);
    }

    tekenKerstBoom(g, x, y) {
        g.fillStyle = "yellow";
        g.beginPath()
        g.arc(400,300,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        g.beginPath()
        g.arc(400,300,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

    }



}

let app = new App();
app.runApplication();