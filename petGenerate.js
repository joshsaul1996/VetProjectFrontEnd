(function(){
    fetch('http://localhost:8080/api/getAllPets')
    .then(function(response) {return response.json();})
    .then(function(data){ 
        for (var i = 0; i <= data.length; i++) {
            console.log(data[i]);
            console.log("i'm here");
        let trow = document.createElement('tr');

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