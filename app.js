const inputs = document.querySelectorAll(".dob-input")
const fieldError = document.querySelector(".field-error")
const validError = document.querySelector(".valid-error")
const dateError = document.querySelector(".date-error")

const calYears = document.getElementById("years")
const calMonths = document.getElementById("months")
const calDays = document.getElementById("days")

const btn = document.querySelector(".btn")
const btnHover = document.querySelector(".btn-black")

const date = new Date()
let count = 0

inputs.forEach(input => {
  let value = input.value
  const placeholder = input.placeholder
  const parent = input.parentNode

  input.addEventListener("input", e => {
    value = input.value
    if (
      (value > 31 && placeholder === "DD") ||
      (value > 12 && placeholder === "MM") ||
      (value > currentYear && placeholder === "YYYY")
    ) {
      input.classList.add("error-input")
      parent.querySelector(".valid-error").classList.add("show-valid-error")
      parent.querySelector(".label").classList.add("error-lable")
    } else {
      input.classList.remove("error-input")
      parent.querySelector(".valid-error").classList.remove("show-valid-error")
      parent.querySelector(".label").classList.remove("error-lable")
      parent.querySelector(".field-error").classList.remove("show-field-error")
    }

    console.log("error")
  })
})

btn.addEventListener("mouseover", () => {
  btnHover.style.display = "block"
  btn.style.display = "none"
})

btnHover.addEventListener("mouseleave", () => {
  btnHover.style.display = "none"
  btn.style.display = "block"
})

btnHover.addEventListener("click", () => {
  inputs.forEach(input => {
    let value = input.value
    const parent = input.parentNode
    if (value === "") {
      input.classList.add("error-input")
      parent.querySelector(".field-error").classList.add("show-field-error")
      parent.querySelector(".label").classList.add("error-lable")
    }
  })
})

// lets compute

const currentDay = date.getDate()
const currentMonth = date.getMonth() + 1
const currentYear = date.getFullYear()

btnHover.addEventListener("click", () => {
  let dobDay = 0
  let dobMonth = 0
  let dobYear = 0

  inputs.forEach(input => {
    if (input.placeholder === "DD") dobDay = input.value
    if (input.placeholder === "MM") dobMonth = input.value
    if (input.placeholder === "YYYY") dobYear = input.value
  })

  let years = currentYear - dobYear
  let months = currentMonth - dobMonth
  let days = currentDay - dobDay

  console.log(years, months, days)

  if (months < 0 || (months === 0 && days < 0)) {
    years--
    months += 12
  }

  if (days < 0) {
    const prevDate = new Date(currentYear, currentMonth, 0)
    const carryDays = prevDate.getDate()
    days += carryDays
    months--
  }

  if (dobMonth == 2) {
    days--
  }

  if (years != currentYear && months != currentMonth && days != currentDay) {
    calYears.textContent = years
    calMonths.textContent = months
    calDays.textContent = days
  }
})
