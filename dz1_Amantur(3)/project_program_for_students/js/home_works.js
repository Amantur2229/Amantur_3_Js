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


//Circle
const circle = document.querySelector(".child_block");
let distance = 0;


function moveBlock() {
  distance += 1;
  circle.style.left = distance + "px";
  if (distance < 450) {
    setTimeout(moveBlock, 10);
  }
}
moveBlock();



