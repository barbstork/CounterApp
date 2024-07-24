let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    
    // Convert totalEl to a number before adding count
    totalEl.textContent = Number(totalEl.textContent) + count

    countEl.textContent = 0
    count = 0

}
