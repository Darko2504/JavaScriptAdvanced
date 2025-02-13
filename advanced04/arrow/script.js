console.log(`========= ARROW FUNCTIONS =========`);



// Regular function
function sayHello(){
    console.log(`Hello!`);
}

// Anonymus function
let tellHello = function(){
    console.log(`Hello from Qinshift`);
}


//No parameters no return
// Arrow functions
let sayHelloArrow = () => {
    console.log(`Hello from Arrow function`);
}

sayHello();
tellHello();
sayHelloArrow();

let sayHelloArrowOneLine = () => console.log(`Say Helloooouyuuuuu00`);
sayHelloArrowOneLine();


// With parameters and with return arrow functions

function getRandomNumber(){
    return Math.floor(Math.random() * 100)
}
console.log(getRandomNumber());

const getRandom = () =>  Math.floor(Math.random() * 555); 
// samoto po sebe si ima return koga ima edna linija kod


let randomNum = getRandom();
console.log(randomNum);


// One parameter, one expression (return value
function isEven(number){
    return number % 2 === 0;
}
const isEvenNumber = (number) => number % 2 === 0;
const isEvenNumberr = numberr => numberr % 2 === 0; // koga ima samo eden parametar moze da gi izostavime zagradite

console.log(`The number 68 is even : `, isEvenNumber(68));

// Multiple parameters, one expression(return value)
const sum = (num1, num2) => num1 + num2;
console.log(`The sum of the numbers two numbers is ${sum(20, 30)}`);

const getMaxNumber = (num1, num2) => {
    if (num1> num2) {
        return num1
    }
    return num2;
}
console.log(`${getMaxNumber(5,1444)} is the bigger number from 5 and 14441 `);


//Arrow function in listeners
const button = document.getElementById(`btn`);

button.addEventListener(`click`, () =>{
    console.log(`Button is clicked`);
    
})

// fetch with arrow funcition

const url = `https://jsonplaceholder.typicode.com/users`;

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));












