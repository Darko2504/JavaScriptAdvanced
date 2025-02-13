// function getData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(46)
//         }, 2000)
//     })

// }
async function start(){
    const data = await fetch(`https://dummyjson.com/products?limit=10`);
    const result = await data.json()
    console.log(result.productsd);
    
}



start();
