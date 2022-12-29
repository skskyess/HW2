const actions = ['+','-','/','*']
function readNumber(customText) {

    let a = +prompt(customText);
    
    if (Number.isNaN(a) === false) {
        return a;
    } 

    return readNumber(customText);
}

function readAction(customText) {
    let action = prompt(customText);


    if (actions.includes(action)){
        return action;
    }

    return readAction(customText);
}

function calculate(number_1,number_2,action) {
    if (action === '+') {
        return number_1 + number_2;
    } 
    if (action === '-') {
        return number_1 - number_2;
    } 
    if (action === '/') {
        return number_1 / number_2;
    } 
    if (action === '*') {
        return number_1 * number_2;
    } 
    return "Incorrect action";
}

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


let firstNumber = readNumber("Enter first number");
console.log(firstNumber);

let secondNumber = readNumber("Enter second number");
console.log(secondNumber);

let operator = readAction('Enter the action');
console.log(operator);

let result = calculate(firstNumber,secondNumber,operator);
alert ('Result is ' + result);

alert('Factorial is ' + factorial(Math.max(firstNumber,secondNumber)));