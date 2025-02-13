console.log(`========== RECURSION FUNCTIONS ==========`);


// Example : Factoriel
// factoriel e 5! toa znaci 5*4*3*2*1. mnozenje na sekoj broj od toj do 1
function factoriel(number){
    if(number <= 1){
        return 1;
    }
    return number * factoriel(number - 1)
}

console.log(factoriel(5));

//Example: sum of numbers 

function sumFactoriel(num){
    if(num === 0){
        return 0;
    }
    return num + sumFactoriel(-- num)
}
console.log(sumFactoriel(10));

// Example: Fibonacci sekoj nareden broj da e zbir od prethodnite 2 i na kraj da se zeme zbirot od site tie broevi
// 0, 1, 1, 3, 5, 8, 13, 21, 34

function fibonacci (n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n-2);
}
console.log(fibonacci(30));












