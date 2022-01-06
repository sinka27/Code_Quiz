//Global Variables
var goBackBtn = document.getElementById("gobackBtn");
var clearScoreBtn = document.getElementById("clearscoreBtn");
var highscoreList = document.getElementById("highscore-list");
var highscore = [];

//rendering players initials and thier respective scores as list
function renderScore(key, value) {
  var li = document.createElement("li");
  li.textContent = key + " - " + value;
  highscoreList.appendChild(li);
}

function init() {
  // Get stored scores from localStorage
  sortLocalStorage();
  for (var i = 0; i < highscore.length; i++) {
    var entry = highscore[i];
    var initial = entry.initial;
    var score = entry.score;
    renderScore(initial, score);
  }
}

//sorting scores numerically in descending order
function sortLocalStorage() {
  var localStorageString = JSON.stringify(localStorage);
  var scores = JSON.parse(localStorageString);
  for (initial in scores) {
    //creating JSON object to store and initials and score
    var jsonData = {};
    jsonData["initial"] = initial;
    jsonData["score"] = scores[initial];
    //JSON object pushed to highscore array
    highscore.push(jsonData);
  }

  //Descending order sorting function
  highscore.sort(function (a, b) {
    return b.score - a.score;
  });
}

init();

//event listener for go back button
goBackBtn.onclick = function () {
  //taking user back to quiz game page
  location.href = "../../index.html";
};

//event listener for clear score button
clearScoreBtn.onclick = function () {
  //delete all initials and respective scores
  localStorage.clear();
  highscoreList.textContent = "";
};
