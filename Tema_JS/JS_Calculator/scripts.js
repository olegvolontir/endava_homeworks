function calculate() {
    let res = document.getElementById("res").value;

    let elems = res.split(" ");

    let n1, n2, result = 0;

    elems.array.forEach(element => {
        if (element = "+") {
            result += (n1 + n2)
        }
        if (element = "-") {
            result += (n1 + n2)
        }
        if (element = "*") {
            result += (n1 + n2)
        }
        if (element = "/") {
            result += (n1 + n2)
        }
    });

    console.log(elems);


}

function addInput(input) {
    document.getElementById("res").value += input;
}