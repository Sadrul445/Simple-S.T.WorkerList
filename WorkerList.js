var workerId = document.querySelector("#workerId");
var workerName = document.querySelector("#workerName");
var phoneNumber = document.querySelector("#phoneNumber");
var btn = document.querySelector(".btn");
var workerList = document.querySelector("#workerList");

btn.addEventListener("click",function(e){
    e.preventDefault();
    if(workerId.value == "" && workerName.value == "" && phoneNumber.value == ""){
        alert("Input Den Vai !");
    }
    else{
        var newRow = document.createElement("tr");

        //creating worker id
        var newWorkerId = document.createElement("th");
        newWorkerId.innerHTML =  workerId.value; 
                                 //i.e. id or class.value
        newRow.appendChild(newWorkerId);    


        var newWorkerName = document.createElement("th");
        newWorkerName.innerHTML =  workerName.value;  
                                    //i.e. id or class.value
        newRow.appendChild(newWorkerName);

        var newPhoneNumber = document.createElement("th");
        newPhoneNumber.innerHTML =  phoneNumber.value;  
                                  //i.e. id or class.value
        newRow.appendChild(newPhoneNumber);

        workerList.appendChild(newRow);
    }
});