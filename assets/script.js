// First PAge

let button = document.querySelector("#StarQuiz_button");
let secondsLeftText = document.querySelector("#Time");
let secondsLeft = 75;  // Create Variable for time interval equal 75 seconds.
let question_position = 0;
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
let questions = document.querySelector("#questions")
questions.style.display = "none";
function QuizStart(){
     setTime();        // Running Timer
    initial_screen.style.display = "none"; // Hiding the initial screen 
    questions.style.display = "block"; // Showing the first question screen
    generate_questions(0);
    generate_multipleChoice(questions_list[question_position].correct_answer -1)
} 
button.addEventListener("click", QuizStart);
// Quizing Section 
let multipleChoice_1 = document.querySelector("#multipleChoice_1"); // Create Variable to hold ids
let multipleChoice_2 = document.querySelector("#multipleChoice_2");
let multipleChoice_3 = document.querySelector("#multipleChoice_3");
let multipleChoice_4 = document.querySelector("#multipleChoice_4");
let question_title = document.querySelector("#question_title"); 
let multipleChoice = [ multipleChoice_1,multipleChoice_2,multipleChoice_3,multipleChoice_4]; // create array for multiplr vhoivr to set index 
let questions_list = [ // Create question list using JSON to store information and set index for question 
    {
        question_title: "Commonly used data types DO NOT includes",
        multipleChoice_1: "1. Strings",
        multipleChoice_2: "2. Bootcamps",
        multipleChoice_3: "3. Alerts",
        multipleChoice_4: "4. Numbers",
        correct_answer: 2
    },
    {
        question_title: "The conditoins in an if/else statement is enclosed within___",
        multipleChoice_1: "1. Commas",
        multipleChoice_2: "2. Curly brackets",
        multipleChoice_3: "3. Quotes",
        multipleChoice_4: " Parenthese",
        correct_answer: 4
    
    
    },
    {
        question_title: "Array in JavaScript can be used to store____",
        multipleChoice_1: "1. Number and Strings",
        multipleChoice_2: "2. Other Arrays",
        multipleChoice_3: "3. Booleans",
        multipleChoice_4: "4. All of the above",
        correct_answer: 4
    },
    {
        question_title: " A very useful tool used during development and debugging for printing content to the debugger",
        multipleChoice_1: "1. JavaScripts",
        multipleChoice_2: "2. Terminal/bash",
        multipleChoice_3: "3. For loops",
        multipleChoice_4: " 4. Console.log",
        correct_answer: 4
    }
]

function generate_questions(question_index) { // Generate questions based on question_list  JSON information
    question_title.textContent = questions_list[question_index].question_title;
    multipleChoice_1.textContent = questions_list[question_index].multipleChoice_1;
    multipleChoice_2.textContent = questions_list[question_index]. multipleChoice_2;
    multipleChoice_3.textContent = questions_list[question_index].multipleChoice_3;
    multipleChoice_4.textContent = questions_list[question_index].multipleChoice_4;

}
function removeEventListener(button) {
    button.removeEventListener("click", correct_answer)
    button.removeEventListener("click", inCorrect_answer);
}
function generate_multipleChoice(multipleChoice_index){
    for (let i=0; i < multipleChoice.length; i++) {
        if (i== multipleChoice_index){
            removeEventListener(multipleChoice[i]);
            multipleChoice[i].addEventListener("click",correct_answer);
        } else{
            removeEventListener(multipleChoice[i]);
            multipleChoice[i].addEventListener("click",inCorrect_answer);
        }

    }
}

function correct_answer(){
    console.log("hihi")

}
function inCorrect_answer(){
    console.log("hehe");
}



