

function gameApp(){
    // sorted locations of petrol pumps 
    var pumpLocation = createPumpArray();


    // removing style from the first hi tag
    document.getElementById('text').style.display='none';
    // document.getElementById('arr').style.display='visible';

    // adding values to the span field 
    document.getElementById('v1').textContent = pumpLocation[0];
    document.getElementById('v2').textContent = pumpLocation[1];
    document.getElementById('v3').textContent = pumpLocation[2];
    document.getElementById('v4').textContent = pumpLocation[3];
    document.getElementById('v5').textContent = pumpLocation[4];




    // initial conditions
    var carPetrol = 30;
    var stepKm;
    var traversedDistance = 0;
    var diff;
    var j = 1;
    var flag = true;

    while(flag){
      
        stepKm = Math.floor(Math.random()*6 + 1);
        traversedDistance = stepKm + traversedDistance;    
        carPetrol = carPetrol - stepKm;

        for(var i = 0; i < pumpLocation.length; i++){

            if(traversedDistance == pumpLocation[i] || ((traversedDistance > pumpLocation[i]) && (traversedDistance < pumpLocation[i+1])) )
            {
                console.log(i);  
                diff = Math.abs(traversedDistance - pumpLocation[i]);
                carPetrol = carPetrol - diff;
                carPetrol = carPetrol + 20;
                break;

            }

        }
     
        if(traversedDistance != 100 && carPetrol <= 0){
            var para = document.createElement("P");               
            para.innerText = "Move :    " + j + " car at :     " + traversedDistance + " Petrol Remaining : " + 0 + ", Game Over !!!";    
            document.getElementById('arr').appendChild(para);  
            flag = false;
        }
        else if(traversedDistance >= 100 && carPetrol >= 1){
            var para = document.createElement("P");               
            para.innerText = "Move :    " + j + " car at :     " + traversedDistance + " Petrol Remaining : " + carPetrol + ", Reached";    
            document.getElementById('arr').appendChild(para);  
            flag = false;
        }
        else{
            var para = document.createElement("P");               
            para.innerText = "Move :    " + j + " car at :     " + traversedDistance + " Petrol Remaining : " + carPetrol;    
            document.getElementById('arr').appendChild(para);  
            flag = true;

        }
        
     
       
      
       j++;
    }

   
}

function renderCar(){
    if(traversedDistance < 100){
       
        return flag;
        
    }
}


function createPumpArray(){
    // we create the random pump array 
    var pumpArray = [];
    while(pumpArray.length < 5){
        var r = Math.floor(Math.random() * 100) + 1;
        if(pumpArray.indexOf(r) === -1) pumpArray.push(r);
    }
    
    // we now sort the array accordingly
    // we use bubble sort to do this 
    let sizeOfPumpArray = pumpArray.length;
    for(var i = 0; i < sizeOfPumpArray; i++){
        for(var j = 0; j < sizeOfPumpArray; j++){
            if(pumpArray[j] > pumpArray[j + 1]){
                let temp = pumpArray[j];
                pumpArray[j] = pumpArray[j + 1];
                pumpArray[j + 1] = temp;
            }
        }
    }
    
    return pumpArray;




}

function clearWin(){
location.reload();
}

// call the function when the button is clicked

document.getElementById('btn').addEventListener('click', clicked);

var refCheck = 1;
function clicked(){
    if(refCheck == 1){
        refCheck = 0
        gameApp();
    }
    else{
        location.reload();
        
    }
}

