console.log(``);
console.log(`====== Synchronous ======`);

function first(){
    console.log(`First thing!`);
    }

function second(){
    console.log(`Second thing!`);
    }
    
    function fibonacci(n){
        if(n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n -2);
    }

    console.log(fibonacci(10));
first();
second();


console.log(``);
console.log(`======== Asynchronous =======`);

fetch(`https://dummyjson.com/products/1`) // sekoj fetch e asinhrono programiranje
.then(response => response.json())
.then(product => console.log(`Here is the product`, product));
console.log(`This is printed after the product !`);


document.querySelector(`button`).addEventListener(`click`, () => {
    console.log(`Button is clicked`);
    
})

setTimeout(() => {
    console.log(`This is printed after 4 seconds!!`);
}, 4000); 

let intervalId = setInterval(() => {
    console.log(`This is printed every 3 seconds`);
}, 3000);
clearInterval(intervalId); // stopira intervalot


 function greet(name) {
  console.log(`Hello ${name}`);
}
greet(`Frose`);             


console.log(1);
console.log(2);
console.log(3);

setTimeout(() => console.log(4), 1000);
console.log(5);
setTimeout(() => console.log(6), 2000);


