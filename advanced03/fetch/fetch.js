//  ======== single joke example =======

// joke api: https://v2.jokeapi.dev/joke/Programming?type=single

const jokeApiUrl =  `https://v2.jokeapi.dev/joke/Programming?type=single`;
const getJokeBtn = document.getElementById(`get-joke-btn`);
const jokeParagraph = document.getElementById(`joke-paragraph`);

getJokeBtn.addEventListener(`click`, function(){
    fetch(jokeApiUrl)
    .then(function(response) {
        console.log(response);
        const parsedResponse = response.json();
        return parsedResponse;
    })
    .then(function(jokeData) {
        console.log(jokeData);
        //Display logic
        jokeParagraph.textContent = jokeData.joke;
    })
    .catch(function(error){
        console.log(`ERROR 404 FOUND`);
        
    })
})


// multiple jokes example
const getJokesBtn = document.getElementById(`get-jokes-btn`);
const jokesAmountInput = document.getElementById(`jokes-amount`);
const jokesContainer = document.getElementById(`jokes-container`);

function generateJokeList(jokesArray){
    jokesContainer.innerHTML = ``;
    const ul = document.createElement(`ul`);
    for (const data of jokesArray) {
        const li = document.createElement(`li`);
        li.textContent = data.joke;  
        ul.appendChild(li);
    }
    jokesContainer.appendChild(ul);
}

function getJokes(url){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(jokesData){
        console.log(jokesData);
        generateJokeList(jokesData.jokes);
    })
}

getJokesBtn.addEventListener(`click`, function(){
    const amount = +jokesAmountInput.value;
    // https://v2.jokeapi.dev/joke/Programming?type=single&amount=5`
    if(amount < 1){
        return;
    }
    const url = `${jokeApiUrl}&amount=${amount}`;
    getJokes(url)
})  