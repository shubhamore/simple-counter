let count = 0

let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")
let reset = document.getElementById("reset")
let counterText = document.getElementById("counter-text")


increment.addEventListener("click", function () {
    count += 1
    counterText.textContent = count
})
decrement.addEventListener("click", function () {
    count -= 1
    counterText.textContent = count
})
reset.addEventListener("dblclick", function () {
    count = 0
    counterText.textContent = count
})

