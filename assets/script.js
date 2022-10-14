// First PAge

let button = document.querySelector("#StarQuiz_button");
let secondsLeftText = document.querySelector("#Time");
let secondsLeft = 75;  // Create Variable for time interval equal 75 seconds.
let question_position = 0; // Create a variable to hold the index 
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
 
let initial_screen = document.querySelector("#initial_screen")  
let questions = document.querySelector("#questions")
questions.style.display = "none";
function QuizStart(){
     setTime();        // Running Timer
    initial_screen.style.display = "none"; // Hiding the initial screen 
    questions.style.display = "block"; // Showing the first question screen
    generate_questions(question_position);
    generate_multipleChoice(questions_list[question_position].correct_answer -1); 
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
        question_title: "Commonly used data types DO NOT include: ",
        multipleChoice_1: "1. strings",
        multipleChoice_2: "2. booleans",
        multipleChoice_3: "3. alerts",
        multipleChoice_4: "4. numbers",
        correct_answer: 3
    },
    {
        question_title: "The conditions in an if/else statement is enclosed within___.",
        multipleChoice_1: "1. quotes",
        multipleChoice_2: "2. curly brackets",
        multipleChoice_3: "3. parentheses",
        multipleChoice_4: "4. square brackets",
        correct_answer: 2
    
    },
    {
        question_title: "Array in JavaScript can be used to store____",
        multipleChoice_1: "1. number and Strings",
        multipleChoice_2: "2. other Arrays",
        multipleChoice_3: "3. booleans",
        multipleChoice_4: "4. all of the above",
        correct_answer: 4
    },
    {
        question_title: "String values must be enclosed within ____ when being assigned to variables",
        multipleChoice_1: "1. commas",
        multipleChoice_2: "2. curly bracket",
        multipleChoice_3: "3. quotes",
        multipleChoice_4: "4. parentheses",
        correct_answer: 3

    },
    {
        question_title: " A very useful tool used during development and debugging for printing content to the debugger",
        multipleChoice_1: "1. JavaScripts",
        multipleChoice_2: "2. terminal/bash",
        multipleChoice_3: "3. for loops",
        multipleChoice_4: "4. console.log",
        correct_answer: 4
    } 
]

function generate_questions(question_index) { // Generate questions based on question_list  JSON information
    question_title.textContent = questions_list[question_index].question_title;
    multipleChoice_1.textContent = questions_list[question_index].multipleChoice_1;
    multipleChoice_2.textContent = questions_list[question_index].multipleChoice_2;
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
    question_position += 1
    generate_questions(question_position);
    generate_multipleChoice(questions_list[question_position].correct_answer -1)

    console.log("hihi")

}
function inCorrect_answer(){
    question_position += 1
    generate_questions(question_position);
    generate_multipleChoice(questions_list[question_position].correct_answer -1)
        console.log("hehe");
}



