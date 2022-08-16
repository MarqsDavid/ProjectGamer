let container = document.querySelector("#container");
let dino = document.querySelector("#mario");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector(".cloud");
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


//start Game

const start = () => {

    document.getElementById("text1").style.color = "rgb(236, 236, 236)";
    block.classList.add('block-animation');

    mario.src = './images/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '50px';
        

    audioStart.play();
}

document.addEventListener('keydown', start);



window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 2s linear infinite";
            
        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
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
    //    console.log("dinoBottom" + dinoBottom);

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    //    console.log("BlockLeft" + blockLeft);

    if (marioBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
        //        console.log("Game Over");


             
        gameOver.style.display = "block";  
        block.classList.remove("blockActive"); 
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;

        function stopAudioStart(){
            audioStart.pause();
            }stopAudioStart();

        audioGameOver.play();

        function stopAudio(){
            audioGameOver.pause();
            }setTimeout(stopAudio, 8000);

        clearInterval(checkGameOver);
        
    }

}, 10);
