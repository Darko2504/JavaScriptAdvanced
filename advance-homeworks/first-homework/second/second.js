let fullName = document.getElementById(`name`);
let createdTable = document.getElementById(`createdTable`);
let button = document.getElementById(`myBtn`);


button.addEventListener(`click`, function () {
  fetch(api)
    .then(function (response) {
      const parseApi = response.json();
      console.log(parseApi);
      
      return parseApi;
    })
    .then(function (details) {
      fullName.textContent = details.name;

      const info = [`Height`, `Weight`, `Eye Color`, `Hair Color`];
      const table = document.createElement(`table`);
      const headRows = document.createElement(`tr`);
      for (let i = 0; i < info.length; i++) {
        const th = document.createElement(`th`);
        th.innerText = info[i];
        headRows.appendChild(th);
        th.style.border = "1px solid black";
        th.style.padding = "10px";
        th.style.textAlign = "center";
      }
      table.appendChild(headRows);

      const rows = document.createElement(`tr`);
      const dets = [
        details.height,
        details.mass,
        details.eye_color,
        details.hair_color,
      ];

      for (let j = 0; j < dets.length; j++) {
        let td = document.createElement(`td`);
        td.innerText = dets[j];
        rows.appendChild(td);
        td.style.border = "1px solid black";
        td.style.padding = "10px";
        td.style.textAlign = "center";
      }
      table.appendChild(rows);

      createdTable.appendChild(table);
      table.style.border = `5px solid red`;
    });
});
