var startButton = document.getElementById("startbutton");
var welcomeContainer = document.getElementById("welcome-container");
var questionContainer = document.getElementById("question-container");
var messageContainer = document.getElementById("message-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answerbuttons");
var timeEl = document.getElementById("time");
var secondsLeft = 60;
var randomQuestion;

//creating timer of 60 seconds
function setTime() {
  var timeInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

//making sure countdown starts only when user clicks on start button
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  //calling our timer function
  setTime();

  //hiding welcome note and start button
  welcomeContainer.classList.add("hide");

  //sorting questions array randomly
  randomQuestion = questions.sort(() => Math.random() - 0.5);

  //displaying questions and answer options
  questionContainer.classList.remove("hide");

  //calling question function to show first question
  showQuestion(0);
}

//shows questions and answer options to user
function showQuestion(quesNum) {
  //display question
  questionEl.innerText = questions[quesNum].question;
  answerButtonsEl.innerText = "";

  //creating 4 answer options' buttons
  for (var i = 0; i < questions[quesNum].answers.length; i++) {
    var button = document.createElement("button");
    button.innerText = questions[quesNum].answers[i].text;
    button.classList.add("button");
    answerButtonsEl.appendChild(button);

    var answerValue = questions[quesNum].answers[i].correct;
    var answerStatus = function (value, button) {
      return function () {
        //displaying message if answer is correct or incorrect
        messageContainer.classList.remove("hide");
        if (value) {
          console.log("Correct Answer");
          //changing color of button when answer correct
          button.style.backgroundColor = "green";
          messageContainer.innerText = "CORRECT!";
        } else {
          console.log("Incorrect Answer");
          //changing color of button when answer incorrect
          button.style.backgroundColor = "red";
          //subtracting 10 seconds when answered incorrectly from the timer
          secondsLeft -= 10;
          messageContainer.innerText = "INCORRECT!";
        }
        //to show next question
        showQuestion(quesNum + 1);
      };
    };
    //add event listener to answer buttons
    button.addEventListener("click", answerStatus(answerValue, button), false);
  }
}

//defining the end of the quiz
function endQuiz() {
  //if secondsLeft<=0 then end the game
}

//restarting the quiz once the quiz has ended
function restartQuiz() {
  startQuiz();
}
//creating array of different questions
var questions = [
  {
    question:
      "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    answers: [
      { text: "1. <SCRIPT>", correct: true },
      { text: "2. <BODY>", correct: false },
      { text: "3. <HEAD>", correct: false },
      { text: "4. <TITLE>", correct: false },
    ],
  },
  {
    question:
      "Which one of the following also known as Conditional Expression:",
    answers: [
      { text: "1. Alternative to if-else", correct: false },
      { text: "2. Switch statement", correct: false },
      { text: "3. If-then-else statement", correct: false },
      { text: "4. Immediate if", correct: true },
    ],
  },
  {
    question:
      "Which of the following variables takes precedence over the others if the names are the same?",
    answers: [
      { text: "1. Global variable", correct: false },
      { text: "2. The local element", correct: true },
      { text: "3. Constant", correct: false },
      { text: "4. None of the above", correct: false },
    ],
  },
  {
    question:
      "Choose the correct snippet from the following to check if the variable 'a' is not equal the 'NULL':",
    answers: [
      { text: "1. if(a!==null)", correct: true },
      { text: "2. if (a!)", correct: false },
      { text: "3. if(a!null)", correct: false },
      { text: "4. if(a!=null)", correct: false },
    ],
  },
  {
    question: "In JavaScript the x===y statement implies that:",
    answers: [
      {
        text: "1. Both x and y are equal in value, type and reference address as well.",
        correct: false,
      },
      { text: "2. Both are x and y are equal in value only.", correct: false },
      { text: "3. Both are equal in the value and data type.", correct: true },
      { text: "4. Both are not same at all.", correct: false },
    ],
  },
];
