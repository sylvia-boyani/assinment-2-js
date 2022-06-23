const button5 = document.querySelector("#plusFive")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})

const button10 = document.querySelector("#plusTen")
const indicator10 = document.querySelector("#number-indicator")
const disp10 = document.querySelector("#display-heading")

button10.addEventListener('click', () => {
  disp10.textContent = "added 10"
  indicator10.textContent = (parseInt(indicator.textContent) + 10).toString()
})

const button15 = document.querySelector("#plusFifteen")
const indicator15 = document.querySelector("#number-indicator")
const disp15 = document.querySelector("#display-heading")

button15.addEventListener('click', () => {
  disp15.textContent = "added 15"
  indicator15.textContent = (parseInt(indicator.textContent) + 15).toString()
})

const button20 = document.querySelector("#plusTwenty")
const indicator20 = document.querySelector("#number-indicator")
const disp20 = document.querySelector("#display-heading")

button20.addEventListener('click', () => {
  disp20.textContent = "added 20"
  indicator20.textContent = (parseInt(indicator.textContent) + 20).toString()
})