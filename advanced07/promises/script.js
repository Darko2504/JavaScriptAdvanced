console.log(`=============== CREATING A PROMISE============`);

// let apiUrl = `https://fakestoreapi.com/products/1`;

// fetch(apiUrl)
// .then(response => response.json())
// .then(product => console.log(product))
// .catch(error => console.log(`Error!`, error))
// .finally(() => console.log(`The fetch ended at ${new Date().toLocaleTimeString()}`));

//Example :Function returning promise

// 1) Pending
// 2) Fulfilled
// 3) Rejected

function simplePromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  return promise;
}

simplePromise()
  .then(() => console.log(`The Promise is fulfilled`))
  .catch(() => console.log(`The Promise is rejected`))
  .finally(() => console.log(`Finally the promise is ended`));

// Example: Function that simulates an asynchronous operation

function simulateOperation(success) {
  return new Promise((resolve, reject) => {
    console.log("Operation started...");
    setTimeout(() => {
      if (success) {
        resolve(`Task completed successfully!`);
      } else {
        reject(`Task is failed! ERROR 404`);
      }
    }, 4000);
  });
}

simulateOperation(false)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 complete!");
      resolve();
    }, 3000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 complete!");
      resolve();
    }, 2000);
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 complete!");
      resolve();
    }, 1000);
  });
}

function step4() {
  return new Promise((resolve) => {
    resolve(`FINAL STEP COMPLETED!`);
  });
}

step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => step4())
  .then((message) => console.log(message))
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("All steps completed!");
  });


console.log(``);
console.log(` ========= PROMISE ALL =========`);

function taskA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task A is completed!!`)
        }, 5555);
    })
}

function taskB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task B is completed!!`)
        }, 4444);
    })
}


function taskC() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task C is completed!!`)
        }, 3333);
    })
}

Promise.all([taskA(), taskB(), taskC()])
.then(message => {
    console.log(`All tasks are completed`)
    console.log(message);
})
.catch(error => console.log(error))
