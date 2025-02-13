'use strict'

console.log(`======= PURE FUNCTIONS ========`);

// Example: Function for adding an element to an array
// necista verzija      NOT PURE
const impureArray= [1, 2, 3];
function addToArrayImpure(array, item){
    array.push(item);
    return array;
}

let resultImpure = addToArrayImpure(impureArray, 444)
console.log(resultImpure);
console.log(impureArray);


const pureArray = [1, 2, 3];
function addToArrayPure(array, item){
    const result = [];
    for (const number of array) {
        result.push(number)
    }
    result.push(item);
    return result;
} // pravi kopija od starata niza i pravi nova niza.sto ke smeninme vo funckijata nema da se smeni vo prvicnata niza


console.log(pureArray);
console.log(addToArrayPure(pureArray, 444));

console.log(``);
console.log(`========= STRICT TYPING IN JS ==========`);
// // number = 15; // nemora let
// // console.log(number);

// // delete number;
// // function sum(num1, num1){
//     // return num1 * num1;
// // }
// // let eval = 123;
// // let arguments  = 2;
// console.log(eval);
// console.log(sum(2, 5));

// console.log(arguments);




