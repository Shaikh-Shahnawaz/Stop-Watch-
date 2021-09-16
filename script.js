console.log("Welcome to javaScript StopWatch")

var spanHours = document.getElementById('hrs')
var spanMinutes = document.getElementById('min')
var spanSeconds = document.getElementById('sec')
var spanMiliSeconds = document.getElementById('m-sec')

var Interval;
var hours = 00;
var minutes = 00;
var seconds = 00;
var miliSeconds = 00;

function startTimer(){
  miliSeconds++;
  if(miliSeconds <=9){
    spanMiliSeconds.innerText = "0"+ miliSeconds;
  }
  if(miliSeconds > 9){

    spanMiliSeconds.innerText = miliSeconds;

  }

  if(miliSeconds > 99){
    seconds++;
    spanSeconds.innerText = "0" + seconds;
    miliSeconds = 0;
    spanMiliSeconds.innerText = "0" + 0;
  }

  if(seconds > 9){
    spanSeconds.innerText = seconds
  }
  if(seconds > 59){
    minutes++;
    spanMinutes.innerText = "0" + minutes;
    seconds = 0;
    spanSeconds.innerText = "0" + 0
  }
  if(minutes > 9){
    spanMinutes.innerText = minutes
  }
  if(minutes > 59){
    hours++;
    spanHours.innerText = "0" + hours
    minutes = 0;
    spanMinutes.innerText = "0" + 0
  }
  if(hours > 9){
    spanHours.innerText = hours
  }


}

function startButton(){

clearInterval(Interval)
Interval = setInterval(startTimer,10)

}


function stopButton(){
  
  clearInterval(Interval)

}

function resetButton(){

clearInterval(Interval)

spanHours.innerText =       "00"
spanMinutes.innerText =     "00"
spanSeconds.innerText =     "00"
spanMiliSeconds.innerText = "00"

}




// /////////////  logic ================


// var myDiv = document.getElementById("myDiv");

// // var counter;
// var number = 00;

// // function timer(){
// //   number ++
// //   myDiv.innerText = number
// // }

// var counter = setInterval(timer=>{
//   //var number = 00;
//   number ++
//   myDiv.innerText = number
// },10)

// function stopTimer(){
//   clearInterval(counter)
// }

