// CREATING JSON OBJECT NOTATION

let jsObject = {
  firstName: `Darko`,
  lastName: `Milanovski`,
  age: 23,
  isStudent: true,
  favouriteSubjects: [`JavaScript`, `C#`],
  printInfo: function () {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
  },
};

jsObject.printInfo();
console.log(typeof jsObject);

// serijalizacija javascript object to json
let jsonString = JSON.stringify(jsObject);

console.log(jsonString);
console.log(typeof jsonString);

//funkciite ne se serijaliziraat i se izostavaat

// Create JavaScript object from JSON

let courseJson = `
{
    "trainer": "John Doe",
    "assistant": "Jane Doe",
    "students": [
      "Bob",
      "Samantha",
      "Chris",
      "Jill",
      "Greg",
      "Maria",
      "Tom",
      "Sue"
    ],
    "academy": "Code"
  }
`;

// Deserijaliziranje json vo javascript objekt


let jsonObject = JSON.parse(courseJson);
console.log(typeof jsonObject);
console.log(jsonObject.trainer);



