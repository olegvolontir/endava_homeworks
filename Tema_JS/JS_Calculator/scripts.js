var num1 = null;
var op = null;

function calculate() {
    if (num1 === null) {
        return
    }

    let split = document.getElementById("input").value.split(" ");

    if (split[split.length - 1] === op.trim()) {
        return
    }

    let num2 = Number(split[split.length - 1]);
    let res = 0;

    switch (op) {
        case ' + ': {
            res = num1 + num2;
            break;
        }

        case ' - ': {
            res = num1 - num2;
            break;
        }

        case ' * ': {
            res = num1 * num2;
            break;
        }

        case ' / ': {
            res = num1 / num2;
            break;
        }
    }

    document.getElementById("res").value = res;

    document.getElementById("input").value = '';
    num1 = null;
    op = null;
}

function addInput(input) {
    document.getElementById("input").value += input;
}

function selectOperation(input) {
    if (op !== null) {
        return
    }

    op = input;

    num1 = Number(document.getElementById("input").value);
    document.getElementById("input").value += input;
}

function clearButton() {
    num1 = null;
    op = null;
    document.getElementById("input").value = '';
    document.getElementById("res").value = '';
}