let container = document.querySelector("#container");
let mario = document.querySelector("#mario");
let block = document.querySelector("#block");
let grass= document.querySelector("#grass");
let road = document.querySelector("#road");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let text1 = document.querySelector("#text1");
audioStart = new Audio('./audio/theme.mp3')
audioGameOver = new Audio('./audio/gameover.mp3')


//declaring variable for score
let interval = null;
let playerScore = 0;


//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`; 
}

// start audio

const start = () => {        
    audioStart.play();
}

document.addEventListener('keydown', start);


//start Game

window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        document.getElementById("text1").style.color = "rgb(236, 236, 236)";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
            grass.classList.add('grass-animation');
    }
});


//jump Your Character
window.addEventListener("keydown", (e) => {
    //    console.log(e);

    if (e.key == "ArrowUp")
        if (mario.classList != "marioActive") {
            mario.classList.add("marioActive");

            //                remove class after 0.5 seconds
            setTimeout(() => {
                mario.classList.remove("marioActive");
            }, 500);
        }
});


//'Game Over' if 'Character' hit The 'Block' 
let result = setInterval(() => {
    let marioBottom = parseInt(getComputedStyle(mario).getPropertyValue("bottom"));

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    //    console.log("BlockLeft" + blockLeft);

    if (marioBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
        //        console.log("Game Over");
          
        gameOver.style.display = "block";  
        block.classList.remove("blockActive"); 
        road.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
        
        document.getElementById("text1").style.color = "rgb(0, 0, 0)";

        function stopAudioStart(){
            audioStart.pause();
            }stopAudioStart();

        audioGameOver.play();       
        
    }

}, 10);
