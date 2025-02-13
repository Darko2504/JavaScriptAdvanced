const button = document.getElementById(`btn`);



console.log(`==== self invoked functions =====`);

// Obicna funkcija
(function(){
    console.log(`This will be executed immediately`);
    
})();

// Using arrow function

((num1, num2) => console.log(num1 + num2))(62,7); // se slucuva vo momentot


// https://jsonplaceholder.typicode.com/users

(() => {
    const productsUrl = `https://dummyjson.com/products/1`;
    const container = document.getElementById(`product-container`); 
    fetch(productsUrl)
    .then(response => response.json())
    .then(product => {
        console.log(product);
        container.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>${product.price}$</p>        
        `
    })
})();
// stavame cela funkcija vo () i posle celata funkcija se stava () za da se izvrsi vo momentot


(function sayHello(name){
    console.log(`Hello ${name}`);
    
})(`Bob Bobsky`)

