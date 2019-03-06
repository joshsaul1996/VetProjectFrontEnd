(function(){
  fetch('./JoshMockData.json')
   .then(function(response) {return response.json();})
   .then(function(data){ 
    for (var i = 0; i <= data.length; i++) {

      let trow = document.createElement('tr');

  	let tdata = document.createElement('td');
  	trow.innerHTML += "<td>" + data[i].name + "</td>" + 
  			"<td>"+data[i].microchip_number+"</td>"+
  			"<td>"+data[i].species+"</td>"+
  			"<td>"+data[i].breed+"</td>"+
  			"<td>"+data[i].age+"</td>"+
  			"<td>"+data[i].medical_history+"</td>"+
  			"<td>"+data[i].prescription+"</td>"+
  			"<td>"+data[i].owner+"</td>";
  	document.getElementById("petBody").appendChild(trow);
    }
  });
})();


function createPet(){
 let name = document.getElementById("name").value;
 let microchip_number = document.getElementById("microchip_number").value;
 let species = document.getElementById("species").value;
 let breed = document.getElementById("breed").value;
 let age = document.getElementById("age").value;
 let medical_history = document.getElementById("medical_history").value;
 let prescription = document.getElementById("prescription").value;
 let owner = document.getElementById("owner").value;

  let data = {
        name : this.name,
        microchip_number :  this.microchip_number,
        species : this.species,
        breed : this.breed,
        age : this.age,
        medical_history : this.medical_history,
        prescription : this.prescription,
        owner : this.owner
        };

  fetch('http://localhost:8080/api/createPet', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}