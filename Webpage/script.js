let emailInput = document.getElementById("UserName");
let passwordInput = document.getElementById("password");

/*if(emailInput === undefined && passwordInput === undefined){
    alert("dummyDum");
}
else{
    alert(emailInput + passwordInput);
}

*/


let cookieInput = document.getElementById("setButton");
let

/**
@param {string} name 
@param {string} value 
@param {Number} days 
*/
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toUTCString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
/**
@param {string} name 
*/
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
/**
@param {string} name 
*/
function eraseCookie(name) {
    createCookie(name, "", -1);
}
addEventListener()

function getInputValue() {
    if (cookieInput != null || cookieInput != undefined) {
        var inputValue = document.getElementById('setButton');
        return inputValue.value;
    }
}