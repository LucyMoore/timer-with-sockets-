document.addEventListener('DOMContentLoaded', function(){
var minutes;
var seconds;
var val;
  var el = document.getElementById('start');

  el.onclick = function() {
     minutes = document.getElementById("min").value;
     seconds = document.getElementById('sec').value;
     validateTime(minutes, seconds);
     val = minutes + ":" + seconds;

    runTimer(val);
  };

document.getElementById('display').value = val;

function runTimer(){
  console.log("timer")
}
function validateTime(minutes, seconds){
  if(minutes.length > 2){
    minutes = minutes.substring(0,1);
  }
  else if(minutes.length == 1){
    minutes = "0" + minutes;
  }

  if(seconds.length > 2){
    seconds = seconds.substring(0,1);
  }
  else if(seconds.length == 1){
    seconds = "0" + seconds;
  }
}

}, false);
