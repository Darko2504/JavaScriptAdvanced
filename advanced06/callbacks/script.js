console.log(`========== Calback functions ==========`);

// Common use 

//1)
function handleTimeout(){
    console.log(`Hello after 3 seconds!`);   
}

setTimeout(handleTimeout, 3000);


// 2) Event `Handling`

document.querySelector(`button`).addEventListener(`click`, () => {
    console.log(`Button is clicked!`);
})

// 3) Asynchronous function
function performAsyncOperation(callback) {  
    console.log(`Async operation started`);
    setTimeout(() => {
        const result = `Async operation completed`;
        callback(result);
    }, 1500);
    console.log(`.... Procesing ....`);
    }

function printResult(item) {
    console.log(item);
}

performAsyncOperation(console.log);

// 4) Higher order functions callbacks
let testArray = [1, 2, 3, 4]
testArray.forEach(n => console.log(n));


// 5) Making request to an API
function renderDataFromApi(url, renderFunc) {
    fetch(url)
    .then(respnse => respnse.json())
    .then(data => {
     renderFunc(data);
    })
}

function displayUser(user){
    //logic for displaying user
   let h3 = document.createElement("h3");
    h3.textContent = `${user.firstName} ${user.lastName}`
    document.body.appendChild(h3)
}




renderDataFromApi('https://dummyjson.com/users/1', displayUser);

renderDataFromApi('https://dummyjson.com/products/1', product => console.log(product));


console.log(``);
console.log(`============= Callbacks functions vs functions as arguments ===========`);

function callbackFunc(someFunc){
    console.log(`Fetching data....`);
    setTimeout(() => {
        console.log(`Data fetched!`);
        someFunc();
    }, 3000);
    console.log(`Processing...`);
}
callbackFunc(() => console.log(`Yeey! We have the data! Let's delete it!`));

function functionArgument(func1,func2){
    console.log(`Executing functions`);
    func1();
    func2();
}

functionArgument(() => console.log(`Hello from func1`), () => console.log(`Hello from func2`));







function callBackFunction(url, anyFunc){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        anyFunc(data);
    })
    
}
function display(user){
    let p = document.createElement(`p`);
    p.textContent = user.firstName;
    document.body.appendChild(p)
}
callBackFunction(`https://dummyjson.com/users/1`, display);