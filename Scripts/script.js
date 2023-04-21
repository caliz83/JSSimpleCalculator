// -At least one input box
// -and 4 operations. +, -, %, *
// -Have all numbers, 0 - 9.
// -Display the answer somewhere
// -Have project on Github

let display = document.getElementById("display");
// let secondNumber = document.getElementById('secondNumber');
let operator;
let addBtn = document.getElementById("addBtn");
let subtractBtn = document.getElementById("subtractBtn");
let multiplyBtn = document.getElementById("multiplyBtn");
let divideBtn = document.getElementById("divideBtn");
let equalsBtn = document.getElementById("equalsBtn");
// let answer = document.getElementById("answer");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let num1 = 0;
let num2 = 0;
let equation = false;
// let opper;

//save first number (num1)
// save operator as a string and switch bool to true to switch to num2
//build num2
//equals sign will check operator and perform equation
// add to display and where answer will display

addBtn.addEventListener("click", function (e) {
  // let sum = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
  // answer.innerText = sum;
  operator = "+";
  console.log(addBtn.innerText);
  // console.log(sum);
  display.value = operator;
  equation = true;
});

subtractBtn.addEventListener("click", function (e) {
  // let difference = parseFloat(firstNumber.value - secondNumber.value);
  // answer.innerText = difference;
  operator = "-";
  console.log(subtractBtn.innerText);
  // console.log(difference);
  display.value = operator;
  equation = true;
});

multiplyBtn.addEventListener("click", function (e) {
  // let product = parseFloat(firstNumber.value * secondNumber.value);
  // answer.innerText = product;
  operator = "*";
  console.log(multiplyBtn.innerText);
  // console.log(product);
  display.value = operator;
  equation = true;
});

divideBtn.addEventListener("click", function (e) {
  // let quotient = parseFloat(firstNumber.value / secondNumber.value);
  // answer.innerText = quotient;
  operator = "/";
  console.log(divideBtn.innerText);
  // console.log(quotient);
  display.value = operator;
  equation = true;
});

equalsBtn.addEventListener("click", function (e) {
  letsGetMathy(operator);
});

// button 0
btn0.addEventListener("click", function (e) {
  if (equation == false) {
    console.log(btn0.innerText);
    num1 += btn0.innerText;
    console.log(num1);
    display.value = num1;
  } else {
    console.log(btn0.innerText);
    num2 += btn0.innerText;
    console.log(num2);
    display.value = num2;
  }
});

// button 1
btn1.addEventListener("click", function (e) {
  if (equation == false) {
    console.log(btn1.innerText);
    num1 += btn1.innerText;
    console.log(num1);
    display.value = num1;
  } else {
    console.log(btn1.innerText);
    num2 += btn1.innerText;
    console.log(num2);
    display.value = num2;
  }
});

// button 2
btn2.addEventListener("click", function (e) {
  if (equation == false) {
    console.log(btn2.innerText);
    num1 += btn2.innerText;
    console.log(num1);
    display.value = num1;
  } else {
    console.log(btn2.innerText);
    num2 += btn2.innerText;
    console.log(num2);
    display.value = num2;
  }
});

// button 3
btn3.addEventListener("click", function (e) {
  if (equation == false) {
    console.log(btn3.innerText);
    num1 += btn3.innerText;
    console.log(num1);
    display.value = num1;
  } else {
    console.log(btn3.innerText);
    num2 += btn3.innerText;
    console.log(num2);
    display.value = num2;
  }
});

// button 4
btn4.addEventListener("click", function (e) {
  if (equation == false) {
    console.log(btn4.innerText);
    num1 += btn4.innerText;
    console.log(num1);
    display.value = num1;
  } else {
    console.log(btn4.innerText);
    num2 += btn4.innerText;
    console.log(num2);
    display.value = num2;
  }
});

// button 5
btn5.addEventListener("click", function (e) {
  if (equation == false) {
    console.log(btn5.innerText);
    num1 += btn5.innerText;
    console.log(num1);
    display.value = num1;
  } else {
    console.log(btn5.innerText);
    num2 += btn5.innerText;
    console.log(num2);
    display.value = num2;
  }
});

// button 6
btn6.addEventListener("click", function (e) {
  if (equation == false) {
    console.log(btn6.innerText);
    num1 += btn6.innerText;
    console.log(num1);
    display.value = num1;
  } else {
    console.log(btn6.innerText);
    num2 += btn6.innerText;
    console.log(num2);
    display.value = num2;
  }
});

// button 7
btn7.addEventListener("click", function (e) {
  if (equation == false) {
    console.log(btn7.innerText);
    num1 += btn7.innerText;
    console.log(num1);
    display.value = num1;
  } else {
    console.log(btn7.innerText);
    num2 += btn7.innerText;
    console.log(num2);
    display.value = num2;
  }
});

// button 8
btn8.addEventListener("click", function (e) {
  if (equation == false) {
    console.log(btn8.innerText);
    num1 += btn8.innerText;
    console.log(num1);
    display.value = num1;
  } else {
    console.log(btn8.innerText);
    num2 += btn8.innerText;
    console.log(num2);
    display.value = num2;
  }
});

// button 9
btn9.addEventListener("click", function (e) {
  if (equation == false) {
    console.log(btn9.innerText);
    num1 += btn9.innerText;
    console.log(num1);
    display.value = num1;
  } else {
    console.log(btn9.innerText);
    num2 += btn9.innerText;
    console.log(num2);
    display.value = num2;
  }
});

function letsGetMathy(operator) {
  // use switch statement: if operator(.innerText?) = +, return num1 + num2, etc
  switch (operator) {
    case "+":
      let sum = parseFloat(num1) + parseFloat(num2);
      //answer.innerText = sum;  //is this wrong? I'm getting confused
      operator.innerText = "+";
      console.log(sum);
      display.value = sum;
      break;
    case "-":
      let difference = parseFloat(num1 - num2);
      //answer.innerText = difference;  //is this wrong? I'm getting confused
      operator.innerText = "-";
      console.log(difference);
      display.value = difference;
      break;
    case "*":
      let product = parseFloat(num1 * num2);
      //answer.innerText = product;  //is this wrong? I'm getting confused
      operator.innerText = "*";
      console.log(product);
      display.value = product;
      break;
    case "/":
      let quotient = parseFloat(num1 / num2);
      //answer.innerText = quotient;  //is this wrong? I'm getting confused
      operator.innerText = "/";
      console.log(quotient);
      display.value = quotient;
      break;
    default:
        console.log(num1);
        break;
  }
}
