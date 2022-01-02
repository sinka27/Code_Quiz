var timeEl = document.getElementById("time");
var secondsLeft = 60;

function setTime(){
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if(secondsLeft===0){
            clearInterval(timeInterval);
        }
    },1000);
}
setTime();