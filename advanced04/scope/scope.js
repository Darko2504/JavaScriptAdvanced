let tesst = 123;

//LOCAL SCOPE OR FUNCTION SCOPE

//Example 1

function localScope(num) {
  let localNumber = 100;
  let result = localNumber + num;
  console.log(result);
}
localScope(11);

//Example 2

let greeting = `Hello from Qinshift Academy`;
function printGreeting() {
  let greeting = `Happy holidays`;
  console.log(greeting);
}
printGreeting();

//Example 3

function outerFunction() {
  let outerVariable = "I'm from the outer function";
  function innerFunction() {
    let innerVariable = `I'm from the inner fucntion`;
    console.log(innerVariable);
  console.log(outerVariable);

  }
  innerFunction();
}
outerFunction(); 
