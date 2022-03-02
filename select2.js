function myFunction(){

    var selectState = ["California","Arizona","Florida", "Deleware"];
    var arrCalifornia = ["Sacramento"];
    var arrArizona = ["Phoenix"];
    var arrFlorida = ["Tallahassee"];
    var arrDelaware = ["Dover"];
    
    var selectoptions = (document.getElementById("state").value);
    var displayCapitals = document.getElementById("capital");
    
    document.getElementById("capital").innerHTML="";
    
    if (selectoptions == "CA"){
        for (i=0;i<arrCalifornia.length;i++)
        {
            var soptions = document.createElement('option');
            console.log(soptions);
            soptions.innerHTML=arrCalifornia[i];
            soptions.value=arrCalifornia[i];
            displayCapitals.appendChild(soptions);
        }
    }
    else if(selectoptions == "AZ"){
        for (i=0;i<arrArizona.length;i++)
        {
            var soptions = document.createElement('option');
            console.log(soptions);
            soptions.innerHTML=arrArizona[i];
            soptions.value=arrArizona[i];
            displayCapitals.appendChild(soptions);
        }
    }
    else if(selectoptions == "FL"){
        for (i=0;i<arrFlorida.length;i++)
        {
            var soptions = document.createElement('option');
            console.log(soptions);
            soptions.innerHTML=arrFlorida[i];
            soptions.value=arrFlorida[i];
            displayCapitals.appendChild(soptions);
        }
    }
    else {
        for (i=0;i<arrDelaware.length;i++)
        {
            var soptions = document.createElement('option');
            console.log(soptions);
            soptions.innerHTML=arrDelaware[i];
            console.log(soptions.innerHTML);
            soptions.value=arrDelaware[i];
            displayCapitals.appendChild(soptions);
        }
    }
    }
    