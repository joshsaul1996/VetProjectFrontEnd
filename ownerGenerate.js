(function(){
    fetch('http://localhost:8080/api/getOwners')
    .then(function(response) {return response.json();})
    .then(function(data){ 
        for (var i = 0; i <= data.length; i++) {
            console.log(data[i]);
            console.log("i'm here");
        let trow = document.createElement('tr');

        trow.innerHTML += "<td>" + data[i].first_name + "</td>" + 
                "<td>"+data[i].last_name+"</td>"+
                "<td>"+data[i].email+"</td>"+
                "<td>"+data[i].landline_number+"</td>"+
                "<td>"+data[i].mobile_number+"</td>"+
                "<td>"+data[i].address+"</td>"+
        document.getElementById("ownerBody").appendChild(trow);
        }
    });
})();