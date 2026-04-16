function zero(){
    document.getElementById("Atbilde").value = document.getElementById("Atbilde").value+"0";
}
function one(){
    document.getElementById("Atbilde").value = document.getElementById("Atbilde").value+"1";
}
function two(){
    document.getElementById("Atbilde").value = document.getElementById("Atbilde").value+"2";
}
function three(){
    document.getElementById("Atbilde").value = document.getElementById("Atbilde").value+"3";
}
function four(){
    document.getElementById("Atbilde").value = document.getElementById("Atbilde").value+"4";
}
function five(){
    document.getElementById("Atbilde").value = document.getElementById("Atbilde").value+"5";
}
function six(){
    document.getElementById("Atbilde").value = document.getElementById("Atbilde").value+"6";
}
function seven(){
    document.getElementById("Atbilde").value = document.getElementById("Atbilde").value+"7";
}
function eight(){
    document.getElementById("Atbilde").value = document.getElementById("Atbilde").value+"8";
}
function nine(){
    document.getElementById("Atbilde").value = document.getElementById("Atbilde").value+"9";
}
function attr1(){
    document.getElementById("Atbilde").value = "";
    document.getElementById("Komm1").value = "";
}
function corr1(){
    if (document.getElementById("Atbilde").value != ""){
        if (document.getElementById("Atbilde").value == "1888"){
            document.getElementById("Komm1").value = "Teicami!";
        }
        else{
            document.getElementById("Komm1").value = "Slikti!";
        }
    }
    else{
        document.getElementById("Komm1").value = "Ievades kļūda"
    }
}
function attr2(){
    document.getElementById("Atbilde2").value = "izvele";
    document.getElementById("Komm2").value = "";
}
function corr2(){
    if(document.getElementById("Atbilde2").value == "izvele"){
        document.getElementById("Komm2").value = "Ievades kļūda";
    }
    else{
        if (document.getElementById("Atbilde2").value == "-50"){
            document.getElementById("Komm2").value = "Teicami!";
        }
        else{
            document.getElementById("Komm2").value = "Slikti!";
        }
    }
}
function attr3(){
    atb=document.getElementsByName("atbilde3")
    for(i =0;i<3;i++){
        atb[i].checked = false;
    }
    document.getElementById("Komm3").value = "";
}
function corr3(){
    if(document.getElementById("atbilde31").checked == true || document.getElementById("atbilde32").checked == true || document.getElementById("atbilde33").checked==true){
       if (document.getElementById("atbilde31").checked){
            document.getElementById("Komm3").value = "Teicami!";
        }
        else{
            document.getElementById("Komm3").value = "Slikti!";
        } 
    }
    else{
        document.getElementById("Komm3").value = "Ievades kļūda";
    }
}
function attr4(){
    document.getElementById("Atbilde4").value = "";
    document.getElementById("Komm4").value = "";
}
function corr4(){
    var atb = document.getElementById("Atbilde4").value
    if (atb != ""){
        if(!isNaN(parseInt(atb))){
            if (atb == "310"){
                document.getElementById("Komm4").value = "Teicami!";
            }
            else{
                document.getElementById("Komm4").value = "Slikti!";
            }
        }
        else{
            document.getElementById("Komm4").value = "Ievades kļūda"
        }
    }
    else{
        document.getElementById("Komm4").value = "Ievades kļūda"
    }
}
