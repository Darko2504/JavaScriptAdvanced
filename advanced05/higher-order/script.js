console.log("================= HIGHER ORDER FUNCTIONS =================");

// ===> TEST DATA
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
    { id: 1, firstName: "Bob", lastName: "Bobsky", age: 20, gender: "Male", isActive: true },
    { id: 2, firstName: "John", lastName: "Smith", age: 23, gender: "Male", isActive: false },
    { id: 3, firstName: "Marie", lastName: "Mosky", age: 19, gender: "Female", isActive: true },
    { id: 4, firstName: "Jane", lastName: "Doe", age: 22, gender: "Female", isActive: false },
    { id: 5, firstName: "Ana", lastName: "Taylor", age: 17, gender: "Female", isActive: true },
];

console.log(`====FOR EACH====`);
// for(const number of numbers){
//     console.log(number);
//     }

    numbers.forEach(number => {
        console.log(number);
        });

// najgolemiot del od higher order funkcii zema funkcija kako argument

students.forEach (student => {
    console.log(`${student.firstName} ${student.lastName}`)
          
});

console.log(``);
console.log(`=======FILTER=======`);

let evenNumbers = []
for (const number of numbers) {
    if(number % 2 === 0){
        evenNumbers.push(number)
    }
}
console.log(evenNumbers);

//Example 1:
const evenNumbersResult = numbers.filter(n => n % 2 === 0);
console.log(evenNumbersResult);


//Example 2:
const femaleStudents = students.filter(student => student.gender === `Female`)
console.log(femaleStudents);


console.log(``);
console.log(`==== MAP ====`);
// vraka nova izmeneta niza a ne ja menuva postoeckata
 //Example 1 : Square numbers

 const squaredNumbers = numbers.map(n => n ** 2)
 console.log(squaredNumbers);

 //Example 2

 const fullNames = students.map(student => `${student.firstName} ${student.lastName}`)
 console.log(fullNames);

 
 //Get students full name but only for the females

 const femaleFullNames = students.filter(s => s.gender === `Female`).map(s => `${s.firstName} ${s.lastName}`);
 console.log(femaleFullNames);
 

 console.log(``);
 console.log(`====REDUCE====`);
 //vraka edna vrednost !! 

 // Example 1: Get sum and average of numbers

 const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sumOfNumbers); // sum
console.log(sumOfNumbers / numbers.length); // average


const divideOfNumbers = numbers.reduce((acc, curr) => acc - curr, 0)
console.log(divideOfNumbers); // divide

//Example 2: Get average age of students

const averageAge = students.reduce((acc, curr) => acc + curr.age, 0 ) // zbir na age
console.log(averageAge);
const avg = averageAge / students.length; // average age
console.log(avg);

console.log(``);
console.log(`==== SORT ====`);

// Exapmle 1: sorting numberss

const sortingNumbers = [-5, 3, 20, -300, 100, 33, 55, 100, 0];

console.log(sortedNumbers);
const sortedNumbers = sortingNumbers.sort((a,b) => a - b); // asceding numbers . od najmaloto kon golemoto 

const sorrtedNumbers = sortingNumbers.sort((a,b) => b - a); // obratno
console.log(sorrtedNumbers);

// Example 2: sort students by age
const sortedStudents = students.sort((a, b) => a.age - b.age); // ascending
console.log(sortedStudents);

const sortedSstudents = students.sort((a, b) => b.age - a.age); // descending
console.log(sortedSstudents);


const sorted = students.sort((a, b) => a.firstName.localeCompare(b.firstName)) // ascending
console.log(sorted);

const ssorted = students.sort((a, b) => b.firstName.localeCompare(a.firstName))
console.log(ssorted);


const newArray = students;
newArray.push(123);
console.log(newArray);

console.log(students);









 
 
  











