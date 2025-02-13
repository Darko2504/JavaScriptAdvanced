function multiply(num1, num2 = 10) {
  console.log(`result: ${num1 * num2}`);
}
multiply(5, 2);
multiply(7);

console.log(`========= FUNCTIONS - FIRST CLASS CITIZENS`);

let greet = (name) => console.log(`Hello ${name}`);
greet(`Darko`);

//Used as an argument to another function

function calculator(calculateFunc, num1, num2) {
  return calculateFunc(num1, num2);
}

function sum(number1, number2) {
  return number1 + number2;
}

let sumResult = calculator(sum, 5, 10);
console.log(sumResult);

let subtractResult = calculator(
  function (num1, num2) {
    return num1 - num2;
  },
  100,
  80
);
console.log(subtractResult);

function logFunction(func) {
  func();
}

logFunction(() => console.log(`Hello`));

console.log(logFunction);

console.log(calculator((x, y) => x * y, 10, 20));

// used as return value from another function

function getOperation(operator) {
  switch (operator) {
    case `+`:
      return (num1, num2) => num1 + num2;
    case `-`:
      return (num1, num2) => num1 - num2;
    case `*`:
      return (num1, num2) => num1 * num2;
    case `/`:
      return (num1, num2) => num1 / num2;
    case `**`:
      return (num1, num2) => num1 ** num2;
    default:
      break;
  }
}

const divide = getOperation(`/`);
console.log(divide(10, 2));

console.log(getOperation(`**`)(2, 3));

// Have properties like objects
function greetStudent(name) {
  console.log(`hello ${name}`);
}
greetStudent.firstName = `Bob`;
greetStudent(greetStudent.firstName);

greetStudent.getFullName = (lastName) =>
  greetStudent.firstName + ` ` + lastName;

console.log(greetStudent.getFullName(`Bobsky`)); // BAD PRACTICE DONT USE TO CREATE AN OBJECT WITH A FUNCTION

console.log(``);
console.log(`========= Functions Arguments======`); // creating arguments thourgh functions

function someFunction() {
  console.log(arguments);
  console.log(arguments.length);
}
someFunction(`dare`, `bob`, `jake`, `darko`, 12, NaN);

function sumOfNumbers() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(sumOfNumbers(2, 5, 1, 234, 555));
console.log(sumOfNumbers(10, 20, 30, 40));
//Argument e klucen zbor sto sekogas ke ocekuva bilo kolku inputi mu vneseme


