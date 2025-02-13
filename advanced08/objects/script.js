console.log(`============= OBJECTS PART 1 =============`);

// Example: Anonymous objects
let dog = {
  name: "Marley",
  color: "brown",
  age: 1,
  owner: {
    firstName: "Bob",
    lastName: "Bobsky",
  },
  bark: function () {
    console.log("Woof Woof!!!");
  },
  printInfo: function () {
    console.log(
      `Dog: ${this.name}. Age: ${this.age}. Owner: ${this.owner.firstName}.`
    );
  },
  //This example
  getThis: this,
  printAnonymous: () => {
    console.log(this);
  },
  printThis: function () {
    console.log(this);
  },
};
dog.printInfo();

console.log(dog.getThis); // window
dog.printAnonymous(); // window
dog.printThis(); // our object

// Example: Created using constructor notation template(constructor funcction)

function Person(firstName, lastName) {
  // if (firstName) {
  // this.firstName = firstName;

  // }
  this.firstName = firstName ? firstName : "unnamed"; // if else
  // this.firstName = firstName ?? "unnamed"; // proveruva dali e null ili undefined
  // this.firstName = firstName || "unnamed";
  this.lastName = lastName;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  //this examples
  this.getThis = this;
  this.printAnonymous = () => {
    console.log(this);
  };
  this.printThis = function () {
    console.log(this);
  };
}



let john = new Person("Jhon", "Doe");
console.log(john.getFullName());
console.log(john.getThis); // person object
console.log(john.printAnonymous()); // person object
console.log(john.printThis()); // person object

console.log(this);
console.log(window); // same as this

console.log(window.document);
console.log(document); // cel html i css vo samiot javascript
console.clear()
console.log(`========= obejct built in methods ==========`);

//create

let person = {
    firstName : "Bob",
    lastName: "Bobsky",
    greet: function(){
        console.log(`Hello!`);     
    }
}
console.log(person);

let bob = Object.create(person); // nasledi sve sto ima person
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob);

let newObject = Object.create(null);
console.log(newObject);



// assign
let bobsAddress = {
    street: "Bobsky st.",
    city: "Skopje"
}

let bobsInfo = Object.assign(bob, bobsAddress)
console.log(bobsInfo);


console.log(``);
console.log(`========= exploring the object ========`);

let barnie = {
    name:"Barnie",
    age:1,
    bark: function() {
        console.log("woof woof woof");
    }
}

// keys
let barnieKeys = Object.keys(barnie) // gi zema samo key ovite
console.log(barnieKeys);

// values
let barnieValues = Object.values(barnie);
console.log(barnieValues);
 
// entries gi  vrakja i keys ot i values ot
let entriesKeysValues = Object.entries(barnie);
console.log(entriesKeysValues);


console.log(``);
console.log(`=========== changing the object accessibillity`);

// freeze
Object.freeze(barnie); // ne dozvoluva da se stava dinamicki properti ili metoda
barnie.isGoodDog = true;
barnie.name = "Chapo";   // nema da se smeni bidejki ima freeze na objektot.. dokolku nema ke se smeni bilo koga da smenime bilo sto
console.log(barnie);


// seal nemoze da dodavame novi propertinja no moze da gi menuvame postoeckite
let marley = {
    name:"Marley",
    color:"brown"
}
Object.seal(marley);
marley.color = "grey"
marley.isGoodDog = true;
console.log(marley);
