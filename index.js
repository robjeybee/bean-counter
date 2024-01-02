let count = 0

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let resetEl = document.getElementById("reset-btn")

const increment = () => {
    count += 1
    countEl.innerHTML = count
    console.log(count)
}

const save = () => {
    let countString = count + " - "
    saveEl.innerHTML += countString
    countEl.innerHTML = 0
    count = 0
}

const reset = () => {
    countEl.innerHTML = 0
    count = 0
    saveEl.innerHTML = ""
}


