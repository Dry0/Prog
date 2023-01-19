class App
{
    runApplication(){

         let title = document.getElementById("");

         let randomgetal = Math.random();
         console.log(randomgetal);
        if (randomgetal > 0.2 && randomgetal <0.4) {
            let newsTitle = document.getElementById("gamenews");
            newsTitle.style.backgroundColor = "#2546BE";
            // Cerulean Blue
        }

        else if (randomgetal < 0.2 && randomgetal >0.1) {
            let newsTitle = document.getElementById("gamenews headline");
            newsTitle.style.backgroundColor = "#BEB525";
            //  Hokey Pokey
        } 

        if (randomgetal > 0.2 && randomgetal <0,6) {
            let newsTitle = document.getElementById("newstitle");
            newsTitle.style.backgroundColor = "#00ffe1";
            // turquise
        }

        else if (randomgetal > 0.6 && randomgetal <0.7) {
            let newsTitle = document.getElementById("newstitle");
            newsTitle.style.backgroundColor = "#25BE25";
            // forest green
        }
    


    }

   

}

    // let randomgetal = Math.random();
    // Returns a random integer from 0 to 9:
    // Math.floor(Math.random() * 10);

   



let app = new App();
app.runApplication();