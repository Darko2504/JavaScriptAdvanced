console.log(`========= ASYNC / AWAIT =========`);

//Example with promises

function getDataPromise() {
  return new Promise((resolve, reject) => {
    let response = {
      message: "Data fetched successfully!",
      statusCode: 200,
    };
    if (response.statusCode >= 400) {
      reject("Fetching data failed!");
    }
    resolve(response);
  });
}

getDataPromise()
  .then((data) => console.log(`Response object:`, data))
  .catch((error) => console.log(`Error!`, error));

async function getDataAsync() {
  let response = {
    message: "Data fetched successfully!",
    statusCode: 200,
  };
  return response;
}

async function processAsyncTask() {
  let data = await getDataAsync();
  console.log(data);
}
processAsyncTask();

let apiUrl = `https://fakestoreapi.com/products/1`;

// fetch(apiUrl)
// .then(response => response.json())
// .then(product => console.log(product))
// .catch(error => console.log(`Error!`, error))
// .finally(() => console.log(`The fetch ended at ${new Date().toLocaleTimeString()}`));

let fetchProduct = async () => {
  try {
    let response = await fetch(apiUrl);
    console.log(response);
    let parsedResponse = await response.json();
    console.log(parsedResponse);
  } catch (error) {
    console.log(`ERROR 404!`, error);
  }
};
fetchProduct();

document.querySelector(`button`).addEventListener(`click`, async () => {
  let product = await fetchProduct();
  console.log(product);
});



console.log(``);
console.log(`========= async vs promises`);


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

step1()
  .then(() => step2())
  .then(() => step3())
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("All steps completed!");
  });


  // so async

  async function runStepsAsync() {
   await step1();
   await step2();
   await step3();  
  }
  


console.log(` ========= End of script =========`);
