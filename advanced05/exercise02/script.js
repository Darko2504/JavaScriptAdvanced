function fetchProdutcs(){

    const url = `https://dummyjson.com/products`
    fetch(url)
    .then(function(response){
        const parsedResponse = response.json();
        return parsedResponse;
        
    })
    .then(function(products){
        console.log(products);
        console.log(products.filter(p => p.price).sort((a, b) => a.localeCompare(b)));
        
    })
}

fetchProdutcs();