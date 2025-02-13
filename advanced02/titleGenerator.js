let colorInput = document.getElementById(`color`);
let numberInput = document.getElementById(`number`);
let textInput = document.getElementById(`text`);
let btn = document.getElementById(`save`);
let final = document.getElementById(`final`);

btn.addEventListener(`click`, function(){
    final.innerText = textInput.value;
    final.style.color = colorInput.value;
    final.style.fontSize = numberInput.value + `px`;
})
