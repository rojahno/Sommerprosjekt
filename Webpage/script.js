
// This code adds jquery to the html document it is linked with.
/*var script = document.createElement('script');
 
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

-----------------------------------------------------------

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

/**
 * Tried to make the load more universal, but ran into trouble with jquery. 
 * @param {String} $loadTo - should be given in a: ('#loadto') - format
 * @param {String} $loadFrom - should be given in a: ('dir/file #element") - format
 */
/*
function loadCommonElements($loadTo, $loadFrom) {

    $($loadTo).load($loadFrom);
}
*/