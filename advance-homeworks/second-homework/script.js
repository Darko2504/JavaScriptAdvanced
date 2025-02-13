const button = document.getElementById("button");
const tableDiv = document.getElementById("table-div");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const generateTable = (planetsData) => {
  let table = document.querySelector("#planetTable");
  if (!table) {
    table = document.createElement("table");
    table.id = "planetTable";
    tableDiv.appendChild(table);
    table.style.border = `5px solid black`;

    const headers = [`Planet Name`, `Population`, `Climate`, `Gravity`];
    const headerRow = document.createElement("tr");
    for (let i = 0; i < headers.length; i++) {
      const th = document.createElement("th");
      th.innerText = headers[i];
      headerRow.appendChild(th);
      th.style.border = "1px solid black";
      th.style.padding = "10px";
      th.style.textAlign = "center";
    }
    table.appendChild(headerRow);
  } else {
    table.innerHTML = "";
    const headers = [`Planet Name`, `Population`, `Climate`, `Gravity`];
    const headerRow = document.createElement("tr");
    for (let i = 0; i < headers.length; i++) {
      const th = document.createElement("th");
      th.innerText = headers[i];
      headerRow.appendChild(th);
      th.style.border = "1px solid black";
      th.style.padding = "10px";
      th.style.textAlign = "center";
    }
    table.appendChild(headerRow);
  }

  planetsData.results.forEach((planet) => {
    const row = document.createElement("tr");
    const information = [
      planet.name,
      planet.population,
      planet.climate,
      planet.gravity,
    ];

    for (let j = 0; j < information.length; j++) {
      let td = document.createElement("td");
      td.innerText = information[j];
      row.appendChild(td);
      td.style.border = "1px solid black";
      td.style.padding = "10px";
      td.style.textAlign = "center";
    }
    table.appendChild(row);
  });
};

const fetchingAppi = (api) => {
  fetch(api)
    .then((response) => response.json())
    .then((planetsData) => {
      generateTable(planetsData);
    })
};

button.addEventListener("click", function () {
  const api = `https://swapi.py4e.com/api/planets/?page=1`;
  fetchingAppi(api);
  nextBtn.hidden = false;
  prevBtn.hidden = true;
  button.remove();
});

nextBtn.addEventListener("click", function () {
  const api = `https://swapi.py4e.com/api/planets/?page=2`;
  fetchingAppi(api);
  nextBtn.hidden = true;
  prevBtn.hidden = false;
  button.remove();
});

prevBtn.addEventListener("click", function () {
  const api = `https://swapi.py4e.com/api/planets/?page=1`;
  fetchingAppi(api);
  nextBtn.hidden = false;
  prevBtn.hidden = true;
  button.remove();
});
