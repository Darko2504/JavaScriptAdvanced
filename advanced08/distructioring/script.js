let userObj = {
  id: 1,
  firstName: "Emily",
  lastName: "Johnson",
  maidenName: "Smith",
  age: 28,
  gender: "female",
  email: "emily.johnson@x.dummyjson.com",
  phone: "+81 965-431-3024",
  username: "emilys",
  password: "emilyspass",
  birthDate: "1996-5-30",
  image: "https://dummyjson.com/icon/emilys/128",
  bloodGroup: "O-",
  height: 193.24,
  weight: 63.16,
  eyeColor: "Green",
  hair: {
    color: "Brown",
    type: "Curly",
  },
  ip: "42.48.100.32",
  address: {
    address: "626 Main Street",
    city: "Phoenix",
    state: "Mississippi",
    stateCode: "MS",
    postalCode: "29112",
    coordinates: {
      lat: -77.16213,
      lng: -92.084824,
    },
    country: "United States",
  },
  macAddress: "47:fa:41:18:ec:eb",
  university: "University of Wisconsin--Madison",
  bank: {
    cardExpire: "03/26",
    cardNumber: "9289760655481815",
    cardType: "Elo",
    currency: "CNY",
    iban: "YPUXISOBI7TTHPK2BR3HAIXL",
  },
  company: {
    department: "Engineering",
    name: "Dooley, Kozey and Cronin",
    title: "Sales Manager",
    address: {
      address: "263 Tenth Street",
      city: "San Francisco",
      state: "Wisconsin",
      stateCode: "WI",
      postalCode: "37657",
      coordinates: {
        lat: 71.814525,
        lng: -161.150263,
      },
      country: "United States",
    },
  },
  ein: "977-175",
  ssn: "900-590-289",
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  crypto: {
    coin: "Bitcoin",
    wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    network: "Ethereum (ERC20)",
  },
  role: "admin",
};

console.log(``);
console.log(`======== DESTRUCTORING =======`);

// ==> Example : take id, firstName, lastName

//   const id = userObj.id;
//   const firstName = userObj.firstName;
//   const lastName = userObj.lastName;
//   console.log(id, firstName, lastName);

// =>Example with destructoring
const { id, firstName, lastName } = userObj;
console.log(id, firstName, lastName);

// => Example : take first name, last name age with distructoring

const { userFirstName, userLastName, age } = userObj;
console.log(userFirstName, userLastName, age);

// => Example: get longitute and lantitude

let latitude = userObj.address.coordinates.lat;
let longitute = userObj.address.coordinates.lng;
console.log(latitude, longitute);

//   const{ lat, lng } = userObj.address.coordinates;
//   console.log(lat, lng);

//Example get the city and ltd and lgn

const {
  city,
  coordinates: { lat, lng },
} = userObj.address;
console.log(city, lat, lng);

console.log(``);
console.log(`========= parameters disctructuring =========`);

// Example => without disctructoring
function getUserInfo(user) {
  return `${user.firstName} ${user.lastName}`;
}
console.log(getUserInfo(userObj));

function getUserInfoDest({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

console.log(getUserInfoDest(userObj));

console.log(``);
console.log(`=========== array disctructoring ============`);

const testArray = [100, 300, 500, 5_000, 400, 10_000];

//Example: take first 3 items from the array withouth destructoring
let firstNumber = testArray[0];
let secondNumber = testArray[1];
let thirdNumber = testArray[2];
console.log(firstNumber, secondNumber, thirdNumber);

// With destructoring
let [itemOne, itemTwo, itemThree, itemFive] = testArray;
console.log(itemOne, itemTwo, itemThree, itemFive); // itemFive = 5000

/// Example. get the first and the third div
let [firstDiv, _, thirdDiv] = document.getElementsByClassName(`array-demo`);
console.log(firstDiv);
console.log(thirdDiv);

// example destructoring with default values

const testArrayTwo = ["First string", "Second string"];
let [firstString, secondString, thirdString] = testArrayTwo;
console.log(firstString, secondString, (thirdString = `Third String`));

// example swapping variables using array destructoring

let a = 10,
  b = 20;
// bez distructoring
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// with destructoring the same thing
[a, b] = [b, a];
console.log(a, b);

console.clear();
console.log(``);
console.log(` ========= spread operator ==========`);

const numbers = [-5, 5, 10, 30, 123, 10_000];
console.log(Math.max(...numbers));

console.log(numbers);
console.log(...numbers);
// spojuvanje na dve nizi vo edna koristejki spread
const dogs = ["Bax", "Chapo", "Sharko"];
const cats = ["Zuza", "Mici"];

let allPetsArr = [];

const allPets = [...dogs, ...cats];
console.log(allPets);

// example create copy of dogs array
const dogsCopy = [...dogs]; // pravenje kopija od postoeckata niza

// spread with objects

let dog = {
  name: "Aks",
  breed: "Pug",
};

let description = {
  group: "Toy",
  color: "Appricot Fawn",
  origin: "China",
};

let owner = {
  firstName: "Bob",
};

let merge = { ...dog, ...description, ...owner };
console.log(merge);

// spread with strings
const word = "HELLO";
const letters = [...word];
console.log(letters); // vrakja niza od stringovi

console.log(``);
console.log(`======== rest operator =======`);

const students = ["Bob", "Jill", "John", "Rob", "Jo"];

const [bobName, jillName, ...restStudents] = students;
console.log(bobName, jillName, restStudents);

// function sum(num1, num2, num3){
//   console.log(arguments);

//   return num1 + num2+ num3;
// }
// console.log(sum(1,2,3,4));

function sum(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 5, 5, 1244));
