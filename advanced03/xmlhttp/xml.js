//  using  xmlhttprequest
console.log(`helo`);

// 1)
let xhr = new XMLHttpRequest();

// 2)
xhr.open( 
    `GET`,
    `https://api.chucknorris.io/jokes/random`);

// 3) 
xhr.onload = function(){
    console.log(xhr.response);
    if(xhr.status >= 200 && xhr.status < 300){
        console.log(`The request succeeded!`);
        let parsedResponse = JSON.parse(xhr.response);
        console.log(parsedResponse);
        
    }else{
        console.log(`The request failed`);
        console.log(xhr.responseText);
        
        
    }
    
}

