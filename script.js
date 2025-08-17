let display =
document.getElementById('display');

function appendValue(value) {
    if (display.innerText === "0")
display.innerText = "";
    display.innerText += value; 
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText.length > 1)
    {
        display.innerText =
    display.innerText.slice(0, -1);
    } else {
        display.innerText ="0";
    }
}

function toggleSign() {
    let current = display.innerText;
    if (current !=="0") {
        if(current.startsWith("-")) {
            display.innerText =
        current.slice(1);
        } else {
            display.innerText ="-" +
        current;
        }
    }
}

function calculate() {
    try {
        let expression =
    display.innerText.replace(/×/g,
    "*").replace(/÷/g, "/");
        display.innerText =
    eval(expression);
    } catch {
        display.innerText = "Error"
    }
}