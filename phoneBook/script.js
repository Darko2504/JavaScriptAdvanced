let contacts = [];

// Function to save the contact
function saveContact() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let errorMessage = document.getElementById("errorMessage");

    // Clear any previous error message
    errorMessage.textContent = "";

    // Validate the inputs
    if (!firstName || !lastName || !phoneNumber) {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    // Validate phone number format (simple validation for numeric digits)
    

    // Create a new contact object
    let newContact = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
    };

    // Add the new contact to the array
    contacts.push(newContact);

    // Clear the input fields
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";

    // Update the contact list display
    displayContacts();
}

// Function to display the contacts in the table
function displayContacts() {
    const contactList = document.getElementById("table");

    // Clear the existing contact list
    contactList.innerHTML = "";

    // Loop through the contacts and add them to the table
    contacts.forEach(contact => {
        const row = document.createElement("tr");

        // Create cells for each piece of contact information
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = contact.firstName;
        row.appendChild(firstNameCell);

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = contact.lastName;
        row.appendChild(lastNameCell);

        const phoneNumberCell = document.createElement("td");
        phoneNumberCell.textContent = contact.phoneNumber;
        row.appendChild(phoneNumberCell);

        // Append the row to the table body
        contactList.appendChild(row);
    });
}
