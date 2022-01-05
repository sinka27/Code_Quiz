var goBackBtn = document.getElementById("gobackBtn");
var clearScoreBtn = document.getElementById("clearscoreBtn");

//Storing all players initials and thier respective scores 

goBackBtn.onclick = function(){
    //taking user back to quiz game page
    location.href = "../../index.html";
}

clearScoreBtn.onclick = function(){
    //delete all initials and respective scores
    localStorage.clear();
}