let divisibleByThree = document.getElementById(`divisible3`);
let divisibleByFour = document.getElementById(`divisible4`);
let endWithOne = document.getElementById(`endWith1`);

let firstArray = [];
let secondArray = [];
let thirdArray = [];


for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0) {
    firstArray.push(i);
    

  }
}
divisibleByThree.innerHTML = firstArray;
console.log(firstArray);

for(let j = 1; j < 1000; j++ ){
    if(j % 4 === 0){
        secondArray.push(j);
    }
}
divisibleByFour.innerHTML = secondArray;

for(let d = 1; d < 1000; d++){
    if(d % 10 === 1){
        thirdArray.push(d);
    }
}
endWithOne.innerHTML = thirdArray;



