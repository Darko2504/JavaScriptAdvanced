let body = document.getElementById(`body`);

let colors = [];
let letters = [`a`, `b`, `c`, `d`, `e`, `f`];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for(let i = 0; i < letters.length; i++){
    for(let j = 0; j < numbers.length; j++){
        colors.push(i);
    }
}
