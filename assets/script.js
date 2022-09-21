let button = document.querySelector("#StarQuiz_button");

let secondsLeftText = document.querySelector("#Time");


let secondsLeft = 75;  // Create Variable for time interval equal 75 seconds.
function setTime(){     // Create function to run timer
    const timerInterval = setInterval(
        function(){ 
            secondsLeftText.textContent = "Time: " + secondsLeft;
            secondsLeft --;
            if (secondsLeft==0){
                clearInterval(timerInterval); 
            } 
        }, 1000
    );
}


function QuizStart(){
    setTime(); 
    console.log("SecondLeft: ");
} 
button.addEventListener("click", QuizStart);



