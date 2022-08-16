//Daily Challenge

function userName() {
let person = prompt("Please enter your name");
let reverseName = person.split("").reverse().join("");
alert('Your name reversed is ' + reverseName);
}


function userNumber() {
let number = prompt("Please enter a number", '10');
let numberTwo = prompt("Please enter a number", '10');
let firstNumber = parseInt(number);
let secondNumber = parseInt(numberTwo);
let total = (firstNumber += secondNumber);
alert('Your total is ' + total);
}

