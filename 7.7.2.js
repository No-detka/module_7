const Obj = {
    a: 0,
    b: 0,
    operator: ''
}

const arr = [2, 3, "+"];

function calculate(a, b, operator) {
    let res;
    switch (operator) {
        case "+":
            res = a + b;
            break;
        case "-":
            res = a - b;
            break;
        case "*":
            res = a * b;
            break;
        case "/":
            res = a / b;
            break;
    }
    return res;
}
const resultat = calculate.apply(null, arr);
console.log(resultat);