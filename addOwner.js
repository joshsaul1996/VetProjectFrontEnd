function createOwner(){
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let landline_number = document.getElementById("landline_number").value;
    let mobile_number = document.getElementById("mobile_number").value;
    let address = document.getElementById("address").value;
   
     let data = {
        first_name : this.first_name,
        last_name :  this.last_name,
        email : this.email,
        landline_number : this.landline_number,
        mobile_number : this.mobile_number,
        address : this.address,
        };
   
     fetch('http://localhost:8080/api/createOwner', {
       method: 'POST', // or 'PUT'
       body: JSON.stringify(data),
       headers:{
         'Content-Type': 'application/json'
       }
     }).then(res => res.json())
     .then(response => console.log('Success:', JSON.stringify(response)))
     .catch(error => console.error('Error:', error));
   }