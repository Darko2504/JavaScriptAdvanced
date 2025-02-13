// ===> TEST DATA
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", age: 20, gender: "Male", isActive: true },
    { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false },
    { id: 3, firstName: "Marie", lastName: "Mosky", age: 19, gender: "Female", isActive: true },
    { id: 4, firstName: "Jane", lastName: "Doe", age: 22, gender: "Female", isActive: false },
    { id: 5, firstName: "Ana", lastName: "Taylor", age: 17, gender: "Female", isActive: true },
];


console.log(``);
console.log(`==== every ====`);

//Example 1:Are all numbers positive
const allPositive = numbers.every(n => n > 0);
console.log(allPositive);

//Example 2:Are all students than 20>
console.log(students.every(s => s.age > 20));

console.log(``);
console.log(`==== some ====`);
// Example 1: Is there at least one even number
console.log(numbers.some(n => n % 2 === 0));

//Example 2: Is there anyone younger than 20 
console.log(students.some(s => s.age < 20));

console.log(``);
console.log(`===== find ====`);
// go naoga prviot 

// Example 1: First even number larger than 20
console.log(numbers.find(n => n % 2 === 0 && n > 20));

//Example 2: First student that his name starts with J
console.log(students.find( s => s.firstName.startsWith(`J`)));

console.log(``);
console.log(` ======= findIndex ======`);

// Example 1: Find the index of the first number greater than 40
console.log(numbers.findIndex(n => n > 40));


console.log(``);
console.log(` ====== includes =======`);
// Example 1: Check if 21 exists in numbers
console.log(numbers.includes(21));


console.log(``);
console.log(` ===== flat =====`);
//Example 1:

const nestedArray = [ 1, [2, 3], [4, [5, 6]], 7];
console.log(nestedArray);
console.log(nestedArray.flat(2)); // zavisno kolku vgnezdeni nizi imame toa pisuvame vo zagrada za kolku ke flattame 


console.log(``);
console.log(` ==== flatMap ====`);
const subjects = [
    {title: `JavaScript`, topics: [ `objects`, `functions`, `promises`]},
    {title: `C#`, topics: [`LINQ`, `Delegates`, `Async/Await`]},
    {title:`SQL`, topics:[`Joins`, `Indexes`, `Transactions`]}
]
console.log(subjects.map(s => s.topics).flat(1));
console.log(subjects.flatMap(s => s.topics));

console.log(``);
console.log(`===== split =====`);
const words = `JavaScript is nice`
console.log(words.split(" "));

console.log(``);
console.log(` ===== join =====`);


console.log(``);
console.log(`==== reverse =====`);
const numbersToReverse = [1, 2, 3, 4, 5, -6, 7, 8];

const reversedNumbers = numbersToReverse.reverse();
console.log(reversedNumbers);
console.log(students.reverse());

 




























