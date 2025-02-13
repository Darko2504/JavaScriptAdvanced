let nameOfAcademy = document.getElementById(`academy`);
let list = document.getElementById(`list`);
let myBtn = document.getElementById(`create`);
const api = `https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json`;



myBtn.addEventListener(`click`, function(){
    fetch(api)
    .then(function(response){
        const parsedApi = response.json();
        return parsedApi;
    })
    .then(function(names){
        nameOfAcademy.textContent = names.academy;
       
            const ul = document.createElement(`ul`);
                console.log(names);
                let students = names.students;
                console.log(students);
                
                
                for (let i = 0; i < students.length; i++) {
                    const li = document.createElement(`li`);
                    li.textContent = names.students[i];
                    ul.appendChild(li);
                }
                list.appendChild(ul);
        
    }) 
    
    
})
