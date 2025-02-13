function fetchApi(){
    const url = ` https://dummyjson.com/carts`

    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(cart){
        const allTitles = cart.carts.flatMap(c => c.products.map(c => c.title));
        console.log(allTitles);
        const quantity = cart.carts.reduce((acc, curr) => {
           return acc + curr.products.reduce((acc, curr) => acc + curr.quantity, 0)
        }, 0)
        console.log(quantity);
        const cartAbovePrice = cart.carts.some(c => c.total > 100000);
        console.log(cartAbovePrice);
        const discountedTotal = cart.carts.reduce((acc, curr) => acc + curr.discountedTotal, 0)
        console.log(discountedTotal);
        const highestValue = cart.carts.sort((a,b) => b.total - a.total);
        console.log(highestValue[0]);
        const discount = cart.carts.flatMap(c => c.products.filter(c => c.discountPercentage > 15))
        console.log(discount);
        const highestQuantity = cart.carts.sort((a, b) => b.totalQuantity - a.totalQuantity);
        console.log(highestQuantity[0].userId);
        const mostExpensive = cart.carts.flatMap(cart => cart.products).sort((a,b) => b.price - a.price);
        console.log(mostExpensive[0]);
        const averageDiscount = cart.carts.reduce((acc, curr)=>{
            return acc + curr.products.reduce((acc, curr) => acc + curr.discountedTotal, 0)
        }, 0)
        console.log(averageDiscount / cart.carts.length);
        const afterDiscount = cart.carts.flatMap(cart => cart.products).sort((a, b ) => b.discountedTotal - a.discountedTotal).slice(0, 3);
        console.log(afterDiscount);
        
    })
}
fetchApi();