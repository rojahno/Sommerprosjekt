
// This code adds jquery to the html document it is linked with.
/*var script = document.createElement('script');
 
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

-----------------------------------------------------------
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
 * A function made to get the input value from an input element.
 * @param {String} inputElemet 
 * @returns The input value
 */
function getInputValue(inputElemet) {
    var inputValue =  document.getElementById(inputElemet);
    return inputValue;
}
