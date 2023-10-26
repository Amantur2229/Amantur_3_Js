// REG EXP
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')

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

hideTabContent()
showTabContent(0)


    tabsParent.onclick = (event) => {
        if (event.target.classList.contains('tab_content_item')) {
            tabs.forEach((item, i) => {
                if (event.target === item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    }
// setTimeout(clickContent, 1000)
//Converter
const usd = document.querySelector("#usd");
const som = document.querySelector("#som");
const tenge = document.querySelector("#tenge");
const convert = (elem, target, isTrue) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
      const data = JSON.parse(request.response);
      if (isTrue === "usd-som") {
        target.value = (elem.value * data.usd).toFixed(2);
      } else if (isTrue === "som-usd") {
        target.value = (elem.value / data.usd).toFixed(2);
      } else if (isTrue === "tenge-som") {
        target.value = (elem.value * data.tenge).toFixed(2);
      } else if (isTrue === "som-tenge") {
        target.value = (elem.value / data.tenge).toFixed(2);
      } else if (isTrue === "usd-tenge") {
        target.value = (elem.value * data.usd / data.tenge).toFixed(2);
      } else if (isTrue === "tenge-usd") {
        target.value = (elem.value * data.tenge / data.usd).toFixed(2);
      }

      elem.value === "" && (target.value = "");
    });
  });
};

const arr = [
    {
        elem: som,
        target: usd,
        isTrue: "som-usd",
      },
      {
        elem: usd,
        target: som,
        isTrue: "usd-som",
      },
      {
        elem: tenge,
        target: som,
        isTrue: "tenge-som",
      },
      {
        elem: som,
        target: tenge,
        isTrue: "som-tenge",
      },
      {
        elem: usd,
        target: tenge,
        isTrue: "usd-tenge",
      },
      {
        elem: tenge,
        target: usd,
        isTrue: "tenge-usd",
      }
];

arr.forEach((item) => {
  convert(item.elem, item.target, item.isTrue);
});