let numbersArray = [1, 2, 3, 4, 5];

function copyArray(array){
    let result = [];
    array.forEach(item => result.push(item));
    return result;
}


let numbersArrayCopy = copyArray(numbersArray);
numbersArrayCopy.pop();
console.log(`The copy`, numbersArrayCopy);
console.log(`The original`, numbersArray);


// => Using slice()
let numbersArraySliceCopy = numbersArray.slice();
console.log(numbersArraySliceCopy); // kopija od originalnata niza 
numbersArraySliceCopy.push(123,123, 123);
console.log(`the slice copy`, numbersArraySliceCopy);
console.log(`the original`, numbersArray);


// => using map
let numbersArrayMapCopy= numbersArray.map(n => n);
numbersArrayMapCopy.pop();
console.log(numbersArrayMapCopy);

// => using spread operator
let numbersArraySpreadCopy = [...numbersArray];
numbersArraySpreadCopy.shift()
console.log(numbersArraySpreadCopy); // pravi kopija




