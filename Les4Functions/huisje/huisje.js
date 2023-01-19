class App
{
    runApplication()
    {
        console.log("hello world");
        // code gaat hier!
        let canvas = document.getElementById("canvas");
        let g = canvas.getContext("2d");
        g.fillRect(500, 400, 200, 100);
        this.tekenHuisFunction(g,200, 300);

    }

    tekenHuisFunction()
    {
        let x = 20;
        let y = 20;
        //line
        g.beginPath()
        g.moveTo();
        g.lineTo(x+280,y+280);
        g.closePath();
        g.stroke();
    }



}

let app = new App();
app.runApplication();