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
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    renderScore(key, value);
  }
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
