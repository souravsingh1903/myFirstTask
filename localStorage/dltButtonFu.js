function handleFormSubmit(event) {
    event.preventDefault();

    let myObj = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value
    };

    let myObj_serial = JSON.stringify(myObj);

    localStorage.setItem(myObj.email, myObj_serial);

    const string = myObj.username + "-" + myObj.email + "-" + myObj.phone;
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(string);
    newLi.appendChild(newLiText);

    // Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.onclick = function() {
        handleEdit(newLi, myObj);
    };

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        handleDelete(newLi, myObj.email);
    };

    // Append the edit and delete buttons to the list item
    newLi.appendChild(editButton);
    newLi.appendChild(deleteButton);

    const list = document.querySelector("ul");
    list.appendChild(newLi);

    // Clear input fields after form submission
    event.target.username.value = '';
    event.target.email.value = '';
    event.target.phone.value = '';
}

function handleEdit(listItem, userObj) {
    // Remove the list item from the UI
    listItem.remove();

    // Remove the item from local storage
    localStorage.removeItem(userObj.email);

    // Populate input fields with existing values
    document.getElementById('username').value = userObj.username;
    document.getElementById('email').value = userObj.email;
    document.getElementById('phone').value = userObj.phone;
}

function handleDelete(listItem, email) {
    // Remove the list item from the UI
    listItem.remove();

    // Remove the item from local storage
    localStorage.removeItem(email);
}
