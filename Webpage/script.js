let emailInput = document.getElementById("UserName");
let passwordInput = document.getElementById("password");

/*if(emailInput === undefined && passwordInput === undefined){
    alert("dummyDum");
}
else{
    alert(emailInput + passwordInput);
}

*/



function dropDownMenu() {
    var x = document.getElementById("myTopnav");
    if (x != null) {
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
}