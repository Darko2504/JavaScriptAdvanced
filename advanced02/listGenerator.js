let color = document.getElementById(`color`);
let number = document.getElementById(`number`);
let input = document.getElementById(`items`);
let button = document.getElementById(`btn`);
let list = document.getElementById(`list`);



   
button.addEventListener(`click`, function () {
    let array = [];
    array = input.value.split(`,`)
    console.log(array);
    for(let i = 0; i < array.length; i++){
        let newList = document.createElement(`li`);
        list.appendChild(newList);
    }
 
  list.style.color = color.value;
  list.style.fontSize = number.value + `px`;
  input.value = ``;
});