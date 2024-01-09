const form = document.getElementById('userForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  // Store user details in local storage
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('phoneNumber', phoneNumber);
});


// function handleFormSubmit(event) {
//     event.preventDefault();
//     const username = document.getElementById('username');
//     const email = document.getElementById('email');
//     const phone = document.getElementById('phone');
  
//     const userDetails = {
//       username: 'Test Name',
//       email: 'test@test.com',
//       phone: '1234567890'
//     };
  
//      const serialized = JSON.stringify(userDetails);
//    localStorage.setItem('User Details', serialized);
//   }
  
//    module.exports = handleFormSubmit;


// Display value on screen
function handleFormSubmit(event){

    event.preventDefault();

    let myObj = {
         username : event.target.username.value,
        email : event.target.email.value,
        phone : event.target.phone.value
      
    };

    let myObj_serial = JSON.stringify(myObj);

    localStorage.setItem(myObj.email, myObj_serial);

  
  const  string=myObj.username+"-"+myObj.email+"-"+myObj.phone
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(string);
    newLi.appendChild(newLiText);
    const list = document.querySelector("ul");
    list.appendChild(newLi);
}

// module.exports = handleFormSubmit;