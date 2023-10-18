//Gmail

const phoneInput = document.querySelector("#gmail_input")
const phoneButton = document.querySelector("#gmail_button")
const phoneResult = document.querySelector("#gmail_result")

const regExp = /^[a-z/\d{2, 4}]+[@\"]+[gmail.com]+$/ig

phoneButton.addEventListener('click',() => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'right'
        phoneResult.style.color = 'yellow'
    }else{
        phoneResult.innerHTML = 'error'
        phoneResult.style.color = 'red'
    }
})


function getCoords(element) {
    return element.getBoundingClientRect()
}

//Circle
const circle = document.querySelector(".child_block");
const parentBlock = document.querySelector('.parent_block')
const parentCoords = getCoords(parentBlock)

let toRight = 0;
let toDown = 0;





function moveToRight() {
    circle.style.left = ++toRight + 'px'
}

function moveToDown() {
    circle.style.top = ++toDown + 'px'
}

function moveToLeft() {
    circle.style.left = --toRight + 'px'
}

function moveToTop() {
    circle.style.top = --toDown + 'px'
}

const directions = {
    0: moveToRight,
    1: moveToDown,
    2: moveToLeft,
    3: moveToTop,
}

let step = 0
const circleWidth = 50

function moveBlock() {
    for (let j = 0; j < parentCoords.width - circleWidth; j++) {
        setTimeout(directions[step], j + 1)
    }
    setTimeout(() => {
        step++
        if (step > 3) step = 0
        moveBlock()
    }, 500)
}

moveBlock();


//Time
let minute = document.querySelector("#minutesS")
let second = document.querySelector("#secondsS")
let start = document.querySelector("#start")
let reset = document.querySelector("#reset")
let stops =  document.querySelector("#stop")
let countminute = "" 
let countsecond = ""
let intervalID = null


function startTimer() {
    intervalID=setInterval(UpdateTimer,1000);
    start.disabled = true;
}
function UpdateTimer() {
        if(countsecond<=58){
            countsecond++
            second.innerHTML=countsecond}
    else if(countsecond>=58){
        second.innerHTML="0"
        countsecond = ''
        countminute++
        minute.innerHTML=countminute
}}
function stopTimer () {
    clearInterval(intervalID);
    start.disabled = false;
}
function resetTimer() {
    stopTimer()
    clearInterval(intervalID);
    intervalID = null;
    minute.innerHTML = countminute = '0'
    second.innerHTML = countsecond = '0'
}
start.addEventListener('click',startTimer);
stops.addEventListener('click',stopTimer);
reset.addEventListener('click',resetTimer);




// function moveBlock() {
//   const childCoords = getCoords(circle)

//   if (distance < 450) { 
//     distance += 1;
//     circle.style.left = distance + "px";
//     setTimeout(moveBlock, 1);
//   }
//   else if(distance>=450){
//     distance += 1;
   
//     circle.style.top = distance + "px";
//     setTimeout(moveBlock, 1);
// }
// else  if(distance>0){
//      qwerty -= 1;
//     circle.style.left  =qwerty + "px"
//     setTimeout(moveBlock, 1);
// }
// else if(distance =0){
//     qwerty -= 1;
//     circle.style.top = qwerty + "px"
//     setTimeout(moveBlock, 1);
// }
  
// }
// moveBlock();






// const subject = prompt('Subject?')

// const doHomework =(finish,subject = 'Math',) =>{
//   alert('starting my ${subject} home work!')
//   alertFinish()
// }

// const alertFinish = ()  => {
//   return alert('Finish')
// }

// doHomework(subject,alertFinish)

// const arr = [1,1,2,3,5,8,13]

// const newArr = arr.map((element,indexElement)=>{
  
// })