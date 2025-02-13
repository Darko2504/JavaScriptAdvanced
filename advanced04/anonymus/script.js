console.log(`============= ANONYMUS FUNCTIONS================`);

// Anonymus function in listeners

const button = document.getElementById(`btn`);

button.addEventListener(`click`, function(){
    console.log(`button is clicked`);
    
})

// Anonymus function in fetch
// https://jsonplaceholder.typicode.com/users

const url = `https://jsonplaceholder.typicode.com/users`;

fetch(url)
.then(function(response){
    const parsedUrl = response.json();
    return parsedUrl;
})
.then(function(users){
    console.log(users);
    
})
.catch(function(error){
    console.error(`ERROR OCCURED!`, error);
    
})


let greet = function(name){
    console.log(`Hello ${name} !`);
    
}
console.log(typeof greet);
greet(`darko`);
