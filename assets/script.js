// First PAge
let highScoresListSection= document.querySelector("#highScoresListDisplay")
let finalScores_dictionary = 
{
}
let finalScores_list =[]
let goBackButton = document.querySelector("#goBackButton")
let clearHighScoresButton = document.querySelector("#clearHighScoresButton")
let submitButton = document.querySelector("#submitButton") // define variable 
let finalScore_text = document.querySelector("#score"); // define variable
let button = document.querySelector("#StarQuiz_button"); // define variable
let secondsLeftText = document.querySelector("#Time"); // define variable
let finalPage = document.querySelector("#finalPage"); // define variable
let secondsLeft = 75   // Create Variable for time interval equal 75 seconds.
let question_position = 0;
function setTime(){     // Create function to run timer
    const timerInterval = setInterval(
        function(){ 
            secondsLeftText.textContent = "Time: " + secondsLeft;
            secondsLeft --;
            if (secondsLeft<=-1){
                clearInterval(timerInterval); 
                secondsLeftText.textContent = "Time: " + 0;
                post_quiz.style.display = "block";
                questions.style.display = "none";
                finalScore_text.innerHTML= " Your final score is " + finalScore.toString();
            } 
        }, 1000
    );
    }
// Create time intersection between pages
let oneSecond= 1; 
function timeIntsCorrectAns(){
    const timeInts = setInterval(
        function(){
            oneSecond --;
            if (oneSecond==0){
                clearInterval(timeInts); 
                oneSecond = 1; 
                correct_notice.style.display = "none";
            }
        }, 1000
    );
}
function timeIntsInCorrectAns(){
    const timeInts = setInterval(
        function(){
            oneSecond --;
            if (oneSecond==0){
                clearInterval(timeInts);
                oneSecond = 1; 
                incorrect_notice.style.display = "none";

            }
        }, 1000
    );
}

 // create variable to hold id 
let initial_screen = document.querySelector("#initial_screen")  
let questions = document.querySelector("#questions")
let post_quiz = document.querySelector("#post_quiz")
let finalScore = 0; 
console.log(finalScore)
let correct_notice = document.querySelector("#correctNotice")
let incorrect_notice = document.querySelector("#incorrectNotice")
questions.style.display = "none"; // hiding the questions screens
post_quiz.style.display = "none"; // hiding the all done screen
finalPage.style.display = "none"; // Hiding Final page
function QuizStart(){
     setTime();        // Running Timer
    initial_screen.style.display = "none"; // Hiding the initial screen 
    correct_notice.style.display = "none"; // Hiding the correct answer notification 
    incorrect_notice.style.display = "none";    // Hiding the incorrect answer notification
    finalPage.style.display = "none"; // Hiding Final page
    questions.style.display = "block"; // Showing the first question screen
    post_quiz.style.display = "none"; // Hiding the post quiz screen
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
    console.log(question_position)
    multipleChoice_2.textContent = questions_list[question_index].multipleChoice_2;
    console.log(question_position)
    multipleChoice_3.textContent = questions_list[question_index].multipleChoice_3;
    console.log(question_position)
    multipleChoice_4.textContent = questions_list[question_index].multipleChoice_4;
    console.log(question_position)

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
// Create transition button 
// questoin by question
// if it reach the final position of the question.list (aka last question)
// then display the post_quiz section
function correct_answer(){
    
    timeIntsCorrectAns();
    if (question_position == questions_list.length -1){ // minus one to stop generating the quetion 
        questions.style.display = "none"; // Hiding the questions
        post_quiz.style.display = "block"; // Display " All done" slide
        finalScore_text.innerHTML= " Your final score is " + finalScore.toString();
        return;
    } 
    // ***** if i choose correct answer *****
    correct_notice.style.display = "block";
    incorrect_notice.style.display = "none";
    question_position += 1
    generate_questions(question_position);
    generate_multipleChoice(questions_list[question_position].correct_answer -1)
    finalScore += 10   
}
function inCorrect_answer(){
    secondsLeft -= 20;
    timeIntsInCorrectAns();
    if (question_position == questions_list.length -1){ // 
        questions.style.display = "none"; // Hiding the questions
        post_quiz.style.display = "block"; // Display " All done" slide
        console.log(finalScore_text)
        finalScore_text.innerHTML = " Your final score is " + finalScore.toString();
        return;  
    } 
    incorrect_notice.style.display = "block"; 
    correct_notice.style.display = "none";
    question_position += 1
    generate_questions(question_position);
    generate_multipleChoice(questions_list[question_position].correct_answer -1) 
       
}
function submit() { // create submit function for Submit Button
    post_quiz.style.display = "none"; //hiding the postquiz page 
    finalPage.style.display = "block"; // display final page 
    finalScores_dictionary
    finalScores_list.push(finalScore)
    if(!(finalScore.toString() in finalScores_dictionary)){ 
        finalScores_dictionary[finalScore.toString()] = []
    }
    
    let initialList = document.getElementsByName('initial') // use a list of elementhave initial as a name
    for ( let i = 0; i < initialList.length; i++ ) { // Get individual element 
        let a = initialList[i];
        finalScores_dictionary[finalScore.toString()].push(a.value)
    }
    finalScores_list.sort()
    finalScores_list.reverse()
    for ( let k = 0; k < finalScores_list.length; k++ ){
       let initials = finalScores_dictionary[finalScores_list[k]]
       console.log(initials)
       for ( j = 0; j < initials.length; j++ ) {
        console.log(initials[j]);
        
        const li = document.createElement('li');
        const text = document.createTextNode("abc");
        li.appendChild(text);
        highScoresListSection.appendChild(li);
        // li.innerHTML = initials[j] - finalScore[k];
       }
    }
    

    //let li = document.createElement("li") 
  // a.value.sort()
   //a.value.rverse()
  // document.getElementById("highScoresListDisplay").appendChild(li)
    // console.log(document.getElementsByName('initial'))
}
function goBack(){ // generating Go back button
    initial_screen.style.display = "block"; // Show the initial screen
    correct_notice.style.display = "none"; // Hiding the correct answer notification 
    incorrect_notice.style.display = "none";    // Hiding the incorrect answer notification
    finalPage.style.display = "none"; // Hiding Final page
    questions.style.display = "none"; // Hiding the question page
    post_quiz.style.display = "none"; // Hiding the post quiz page
    secondsLeft = 75; // reset to default value
    question_position = 0; // reset question position to default value
    finalScore = 0; // Reset final Score to default value

}
submitButton.addEventListener("click",submit) // Create a cloick for submit button 
goBackButton.addEventListener("click",goBack) // Create a click for go back button 

