var started = false;
$(document).on("keydown", function(){
    $("h1").text("Level 1");

        var list = ["green", "red", "yellow", "blue"];
        
        var sequence = [];
        setTimeout(randomGeneration, 1000);
        function randomGeneration(){
            var random = list[Math.floor(4*Math.random())];
            soundAndAnimate(random);
            sequence.push(random);
        }
        let level = 1;
        var pressed ;
        var index = 0;
        $(".btn").on("click",  function(){
            pressed = this.getAttribute("id");
            if(index < sequence.length){
                if(pressed === sequence[index]){
                    soundAndAnimate(pressed);
                    if(index === sequence.length -1){
                        index = 0;
                        level++;
                        $("h1").text("Level " + level);
                        setTimeout(randomGeneration, 1000);
                    }else index++
                } else {
                    error();
                }
            } 
            
        });
        
        function soundAndAnimate(object){
            document.querySelector("#" + object).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("#" + object).classList.remove("pressed");
            }, 100);
            var audio = new Audio("./sounds/" + object + ".mp3");
            audio.play();
        }
        function error(){
            document.querySelector("body").classList.add("game-over");
            setTimeout(function(){
                document.querySelector("body").classList.remove("game-over");
            },100);
            var erroraudio = new Audio("./sounds/wrong.mp3");
            erroraudio.play();
            sequence = [];
            $("h1").text("Game Over! Press Any Key to Restart");
            $(document).on("keydown", function(){
                $("h1").text("Level 1");
                // setTimeout(randomGeneration, 500);
            });
            
        }

});


