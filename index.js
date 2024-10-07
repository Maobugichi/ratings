const btn = document.querySelectorAll(".btn")
const submitButton = document.querySelector(".submit")
let activeElement = null
const num = document.querySelector(".num")
const container = document.querySelector(".container")
const secondContainer = document.querySelector(".container2")
const errMessage = document.querySelector(".error")
btn.forEach((item) => {
   item.addEventListener("click", () => {
    changeColor(item)
   })
})

function changeColor(item) {
 //console.log(activeElement)
 if (activeElement) {
  activeElement.classList.remove("white")
 }
 item.classList.add("white")
 activeElement = item
 console.log(item.textContent)
 num.textContent = item.textContent 
}

submitButton.addEventListener("click", () => {
    console.log(num.textContent)
    if (num.textContent ) {
     container.classList.add("hidden")
     secondContainer.classList.add("block")
    } else {
     errMessage.classList.add("block")
     const errId = setTimeout(() => {
        errMessage.classList.remove("block") 
       }, 3000)
       errId;
    }
    const timerId = setTimeout(() => {
     container.classList.remove("hidden")
     secondContainer.classList.remove("block") 
    }, 6000)
    timerId;
})
