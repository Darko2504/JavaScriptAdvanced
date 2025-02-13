console.log(`=========== ARRAYS ============`);

let mixedArray = [ true, 234, `String`, NaN, undefined, 12_342_131];
let testArray = [1, 23, 52, 1232134, 134];

// splice
testArray.splice(2, 1);

testArray.splice(4);

console.log(testArray)
;


let testArrayTwo = [222, 333, 444, 555];
testArrayTwo.splice(1, 1, 10_000);

console.log(testArrayTwo);
