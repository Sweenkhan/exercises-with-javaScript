let startBtn = document.querySelector(".start")
let stopBtn = document.querySelector(".stop")
let resetBtn = document.querySelector(".reset")

let hoursDiv = document.querySelector(".hours")
let minutesDiv = document.querySelector(".minutes")
let secondsDiv = document.querySelector(".seconds")

let time = 1000;

let secondTime = 1;
let minutesTime = 1;
let hoursTime = 1
let stoping = false


let runningTime = function() {
     setInterval(() => {

         
        if(secondTime === 60) {
            minutesDiv.innerHTML = minutesTime
            minutesTime++
            secondTime = 0
        } else if (minutesTime === 60) {
            hoursDiv.innerHTML = hoursTime
            hoursTime++
            minutesTime = 0
            secondTime = 0
        }
        else { 
            secondsDiv.innerHTML = (stoping) ? secondTime : secondTime++
            console.log(secondTime)
             
        }
         
        
    }, time++)
}


// let stopTime = function() {
    
//    return stoping = true
//    console.log(stoping)
    
// }






startBtn.addEventListener("click", () => { 
    runningTime ()

    if(stoping === false) {
        stoping = true
    }

    stoping = false
})

stopBtn.addEventListener("click", () => {
     
    console.log("hi")
    return stoping = true
       
})

  