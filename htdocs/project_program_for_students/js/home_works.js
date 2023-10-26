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

// MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
setTimeout(openModal, 5000)
modal.onclick = (event) => {
    event.stopPropagation()
    event.target === modal && closeModal()
}

const scrollHandler = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        window.removeEventListener('scroll', scrollHandler);
    }
}

window.addEventListener('scroll', scrollHandler);


// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')
let currentTab = 0;

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideTabContent();
    currentTab = (currentTab + 1) % tabs.length;
    showTabContent(currentTab);
};


hideTabContent()
showTabContent()
setInterval(switchTab, 3000);

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                currentTab = i
                showTabContent(currentTab)
            }
        })
    }
}

// //Converter
// const usd = document.querySelector("#usd");
// const som = document.querySelector("#som");
// const tenge = document.querySelector("#tenge");
// const convert = (elem, target, isTrue) => {
//   elem.addEventListener("input", () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "../data.json");
//     request.setRequestHeader("Content-Type", "application/json");
//     request.send();
//     request.addEventListener("load", () => {
//       const data = JSON.parse(request.response);
//       if (isTrue === "usd-som") {
//         target.value = (elem.value * data.usd).toFixed(2);
//       } else if (isTrue === "som-usd") {
//         target.value = (elem.value / data.usd).toFixed(2);
//       } else if (isTrue === "tenge-som") {
//         target.value = (elem.value * data.tenge).toFixed(2);
//       } else if (isTrue === "som-tenge") {
//         target.value = (elem.value / data.tenge).toFixed(2);
//       } else if (isTrue === "usd-tenge") {
//         target.value = (elem.value * data.usd / data.tenge).toFixed(2);
//       } else if (isTrue === "tenge-usd") {
//         target.value = (elem.value * data.tenge / data.usd).toFixed(2);
//       }

//       elem.value === "" && (target.value = "");
//     });
//   });
// };

// const arr = [
//     {
//         elem: som,
//         target: usd,
//         isTrue: "som-usd",
//       },
//       {
//         elem: usd,
//         target: som,
//         isTrue: "usd-som",
//       },
//       {
//         elem: tenge,
//         target: som,
//         isTrue: "tenge-som",
//       },
//       {
//         elem: som,
//         target: tenge,
//         isTrue: "som-tenge",
//       },
//       {
//         elem: usd,
//         target: tenge,
//         isTrue: "usd-tenge",
//       },
//       {
//         elem: tenge,
//         target: usd,
//         isTrue: "tenge-usd",
//       }
// ];

// arr.forEach((item) => {
//   convert(item.elem, item.target, item.isTrue);
// });
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