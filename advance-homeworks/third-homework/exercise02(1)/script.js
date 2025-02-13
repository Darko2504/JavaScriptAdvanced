function fetchProducts(){
    const url = `https://dummyjson.com/products`

    fetch(url)
    .then(function(response){
        return  response.json();
    })
    .then(function(data){
       //1)
        const laptopsInStock = data.products;
        laptopsInStock.filter(p => p.availabilityStatus === 'In Stock').sort((a, b) => b.price - a.price);  
        console.log(laptopsInStock);
        //2)
         console.log(data.products.filter(p => p.id === 1));
         //3)
         const index = data.products.findIndex(p => p.brand === 'Samsung');
         console.log(index);
         
         
       
        
    })
}
fetchProducts();