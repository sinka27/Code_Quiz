//var startPath = "./assets/HTML/start.html";
var startButton = document.getElementById("startbutton");
var welcomeContainer = document.getElementById("welcome-container");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answerbuttons");
var timeEl = document.getElementById("time");
var secondsLeft = 60;
var shuffledQuestion, currentQuestionIndex;

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

  //currentQuestionIndex=0;

  //displaying questions and answer options
  questionContainer.classList.remove("hide");

  //calling question function
  showQuestion();
}

function showQuestion() {
  questionEl.innerText = questions[0].question;
  answerButtonsEl.innerText = "";
  questions[0].answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("button");
    answerButtonsEl.appendChild(button);
  });
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
];

// function mainPopulate(file, callbackFunction) {
//     fetch(file)
//         .then(function (response) {
//             return response.text();
//         })
//         .then(function (text) {
//             document.getElementById('main').innerHTML = text;

//             if (callbackFunction !== null) {
//                 callbackFunction();
//             }
//         })
// }

// function updateStartButton() {
//     var startButton = document.getElementById("startbutton");
//     startButton.onclick = function () {
//       //calling our timer function
//       setTime();

//       //calling our question function
//     };
// }
// mainPopulate(startPath, updateStartButton);
