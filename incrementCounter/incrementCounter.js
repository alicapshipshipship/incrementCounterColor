let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count

    if (count>5 && count<8) {
        document.body.style.backgroundColor = "#fec3bd"
    }

    if (count>8 && count<12) {
        document.body.style.backgroundColor = "#fe9c92"
    }

    if (count>12 && count<16) {
        document.body.style.backgroundColor = "#fe6b5c"
    }

    if (count>16 && count<20) {
        document.body.style.backgroundColor = "#ff1e07"
    }

    if (count>20) {
        const button = document.getElementById("increment-btn")
        button.disabled = true; // Disable the button
        button.textContent = "MAX CAPACITY REACHED"
    }

}




