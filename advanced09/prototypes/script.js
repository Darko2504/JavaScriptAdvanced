console.log(`========= PROTOTYPES =========`);

const animal = {
    type: "Mamal",
    eat: function () {
        console.log("Nom Nom Nom!");
    }
}

const dog = Object.create(animal);

dog.breed = "Doberman"
console.log(animal);
console.log(dog);



console.log(``);
console.log("=========__proto__ =======");

console.log(dog.__proto__); // go vadime prototipot na objektot dog
console.log(animal.__proto__); // go vadime prototipot na objektot animal, ustvari window objektot
console.log(dog.prototype); // undefined


console.log(``);
console.log(`========= PROTOTYPE ==========`);

function Animal(name){
    this.name = name;
    this.eat = () => console.log(`${this.name} is eating`);
}


Animal.prototype.makeSound = function() {
    console.log(`${this.name} makes sound`);
}

Animal.prototype.isWild = false
console.log(Animal.prototype);

const cat = new Animal("cat");
cat.makeSound;
console.log(cat);
