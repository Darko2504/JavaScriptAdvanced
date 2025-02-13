function fetchStudents(){
    const url = `https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G2/Class07/students.json`
    fetch(url)
    .then(function(response){
        const parsedResponse = response.json();
        return parsedResponse;
        
    })
    .then(function(students){
         console.log(students.filter(s => s.averageGrade > 3));
         console.log(students.filter(s => s.gender === `Female` && s.averageGrade === 5 || s.averageGrade > 5));
         console.log(students.filter(s => s.gender === `Male` && s.city === `Skopje` && s.age > `18`));
         console.log(students.filter(s => s.gender === `Female` && s.age > 24).map(s => s.averageGrade));
         console.log(students.filter(s => s.gender === `Male` && s.firstName.startsWith(`B`) && s.averageGrade > 2));
         console.log(students.filter(s => s.gender === `Female` && s.age > 20 && s.age < 30).map(s => s.email));
         console.log(students.filter(s => s.age > 40 ).map(s => `${s.firstName} ${s.lastName}`).sort((a, b) => a.localeCompare(b)));
         console.log(students.filter(s => s.email.includes(`google`)).length);
         const femaleStudents = students.filter(s => s.gender === `Female` && s.city === `Skopje`);
         console.log(femaleStudents.reduce((acc, curr) => acc + curr.age,0) / femaleStudents.length);
         
         
         
         
        
         
            
    })

        }
        fetchStudents();