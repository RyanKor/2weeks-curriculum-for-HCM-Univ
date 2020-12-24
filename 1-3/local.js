let brand = "AirBlade"
localStorage.setItem("Honda", brand)

let local = document.getElementById('local')
let getLocal = localStorage.getItem("Honda")


local.textContent = getLocal