let firstName = document.getElementById(`fName`);
let lastName = document.getElementById(`lName`);
let phoneNumber = document.getElementById(`phoneNumber`);
let table = document.getElementsByTagName(`tbody`)[0];

function createTable() {
  let fName = firstName.value;
  let lName = lastName.value;
  let number = phoneNumber.value;
  if(isNaN(number)){
    alert( `Please enter a valid phone number`);
    row.remove();
  }
  

  if (fName === `` || lName === `` || number === ``) {
    return alert(`Please enter valid informations`);
  }

  

  let row = document.createElement(`tr`);

  let firstNameCell = document.createElement(`td`);
  let lastNameCell = document.createElement(`td`);
  let phoneNumberCell = document.createElement(`td`);
  let deleteCell = document.createElement(`button`);
  let numberCell = document.createElement(`td`);
  let changeElement = document.createElement(`button`);

  let rowIndex = table.rows.length + 1;

  numberCell.textContent = rowIndex;
  firstNameCell.textContent = fName;
  lastNameCell.textContent = lName;
  phoneNumberCell.textContent = number;
  deleteCell.textContent = `Delete Contact`;
  changeElement.textContent = `Change Contact`;

  

  row.appendChild(numberCell);
  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(phoneNumberCell);
  row.appendChild(deleteCell);
  row.appendChild(changeElement);

  deleteCell.style.backgroundColor = `blue`;
  deleteCell.style.color = `white`;
  deleteCell.style.marginLeft = `15px`;
  deleteCell.style.textAlign = `center`;
  deleteCell.style.marginLeft = `15px`;
  deleteCell.style.textAlign = `center`;
  changeElement.style.backgroundColor = `blue`;
  changeElement.style.color = `white`;
  changeElement.style.marginLeft = `15px`;
  changeElement.style.textAlign = `center`;
  changeElement.style.marginLeft = `15px`;
  changeElement.style.textAlign = `center`;

  changeElement.addEventListener(`click`, function () {
    firstName.value = fName;
    lastName.value = lName;
    phoneNumber.value = number;

    
    changedRow = row;
    if (changedRow) {
        
        changedRow.remove();
    
       
        let fName = firstName.value;
        let lName = lastName.value;
        let number = phoneNumber.value;
    
        let firstNameCell = document.createElement(`td`);
        let lastNameCell = document.createElement(`td`);
        let phoneNumberCell = document.createElement(`td`);
        let deleteCell = document.createElement(`button`);
        let numberCell = document.createElement(`td`);
        let changeElement = document.createElement(`button`);
    
        
        let rowIndex = table.rows.length + 1;
        numberCell.textContent = rowIndex;
        firstNameCell.textContent = fName;
        lastNameCell.textContent = lName;
        phoneNumberCell.textContent = number;
        deleteCell.textContent = `Delete Contact`;
        changeElement.textContent = `Change Contact`;
      }
  });

  deleteCell.addEventListener(`click`, function () {
    firstNameCell.textContent = ``;
    lastNameCell.textContent = ``;
    phoneNumberCell.textContent = ``;
    row.remove();
  });

  table.appendChild(row);

  firstName.value = ``;
  lastName.value = ``;
  phoneNumber.value = ``;
}

function saveChanges() {
  if (changedRow) {
    
    changedRow.remove();

  
    let fName = firstName.value;
    let lName = lastName.value;
    let number = phoneNumber.value;

    let firstNameCell = document.createElement(`td`);
    let lastNameCell = document.createElement(`td`);
    let phoneNumberCell = document.createElement(`td`);
    let deleteCell = document.createElement(`button`);
    let numberCell = document.createElement(`td`);
    let changeElement = document.createElement(`button`);

    
    let rowIndex = table.rows.length + 1;
    numberCell.textContent = rowIndex;
    firstNameCell.textContent = fName;
    lastNameCell.textContent = lName;
    phoneNumberCell.textContent = number;
    deleteCell.textContent = `Delete Contact`;
    changeElement.textContent = `Change Contact`;
  }
}
