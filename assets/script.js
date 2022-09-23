// First PAge

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

let initial_screen = document.querySelector("#initial_screen") // 
let first_question = document.querySelector("#question_1")
first_question.style.display = "none";
function QuizStart(){
     setTime();        // Running Timer
    initial_screen.style.display = "none"; // Hiding the initial screen 
    first_question.style.display = "block"; // Showing the first question screen
    generate_question_1();
} 
button.addEventListener("click", QuizStart);

// Quizing Section 
let q1a1 = document.querySelector("#q1a1");
let q1a2 = document.querySelector("#q1a2");
let q1a3 = document.querySelector("#q1a3");
let q1a4 = document.querySelector("#q1a4");
let q1 = document.querySelector("#title_question_1");
let question_1 = {
    question: "Commonly used data types DO NOT include:",
    multiplechoice_1: "1. strings",
    multiplechoice_2: "2. Bootcamps",
    multiplechoice_3: "3. Alerts",
    multiplechoice_4: "4. Numbers",
    correct_answer: 2
};
 
function generate_question_1(){
    q1a1.textContent = question_1.multiplechoice_1;
    q1a2.textContent = question_1.multiplechoice_2;
    q1a3.textContent = question_1.multiplechoice_3;
    q1a4.textContent = question_1.multiplechoice_4;
    q1.innerText = question_1.question;
   
};



