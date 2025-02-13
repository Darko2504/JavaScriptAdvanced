let test = [true, false, 13, 14, 15, 51, 123, `Bob`, `Bill`, null, ``, undefined, NaN];


function onlyStrings(){
    let stringArray = [];
    
    for(let i = 0; i < test.length; i++){
        
        if(typeof(test[i]) === `string` ){
            stringArray.push(test[i]);
        }
    }
    return stringArray;
    
}
console.log(onlyStrings());


function onlyNumbers(){
    let numberArray = [];
    
    for(let j = 0; j < test.length; j++){
        if(typeof(test[j]) === typeof(1) ){
            numberArray.push(test[j])
        }
    }
    return numberArray;
    
}
console.log(onlyNumbers());

function cleaning(){
let cleanedArray = [];
    for(let d = 0; d < test.length; d++){
        if(!test[d]){
            cleanedArray.push(test[d]);
        }
    }

    return cleanedArray;
}
console.log(cleaning());





