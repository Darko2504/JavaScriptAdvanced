let n = 0;
while (n <= 1) {
  n++;
}

const numberOfDigits = (n) => {
  let result = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    result++;
  }
  return result;
};
console.log(numberOfDigits(234)); 

const evenOrOdd = (n) => {
    if(n % 2 !== 0){
        return `odd`
    }
    else{
        return `even`
    }
}
console.log(evenOrOdd(234));


const positiveOrNegative = (n) => {
    if(n > 0){
        return `positive`
    }
    else{
        return `negative`
    }
}
console.log(positiveOrNegative(-2));


console.log(`the number 234 has ${numberOfDigits(234)} digits. It is ${evenOrOdd(234)} number and it is a ${positiveOrNegative(234)} number`);




