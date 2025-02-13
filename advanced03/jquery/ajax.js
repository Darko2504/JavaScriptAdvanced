$(document).ready(function(){
    const getJokeBtn = $(`#get-joke-btn`);
    const jokesContainer = $(`#jokes-container`);
    
    getJokeBtn.click(function(){
        $.ajax({
            url: `https://api.chucknorris.io/jokes/random`,
            method: `GET`,
            dataType: `json`,
            success: function(response){
                console.log(response);
                jokesContainer.html(`
                    <p>${response.value}</p>
                    <img src = "${response.icon_url}" 
                    style = 
                    "width : 500px; height: 500px;"
                    alt = " Chuck Norris Icon">
                    `)
                
            },
            error: function(error){
                console.log(`ERROR`);
                

            }
        })
    })
})