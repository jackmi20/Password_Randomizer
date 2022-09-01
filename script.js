function myFunction() {
var myCheck1 = document.getElementById("ulcheck");
var myCheck2 = document.getElementById("llcheck");
var myCheck3 = document.getElementById("sccheck");
var myCheck4 = document.getElementById("ncheck");
var numberInput = document.getElementById("pwlength");
var iLength = 0;
var charNumber = 0;
var testNumber = 1;
var newPass = ""


if (! myCheck1.checked && ! myCheck2.checked && !myCheck3.checked && ! myCheck4.checked) {
    window.alert("You must check at least one box.");
    return;
    
}
if (numberInput.value === "") {
    window.alert("You must select a password length");
    return;
    
}

iLength = parseInt( numberInput.value, 10 );

if (iLength < 8 || iLength > 128) {
    window.alert("Must be a number greater than 8 and less than 128");
    return;
    
}

while (charNumber <= iLength) {
    testNumber = Math.floor(Math.random() * 123);

    if (testNumber < 33) {
        continue;

        
    }
    if (! myCheck1.checked && testNumber > 64 && testNumber < 91) {
        continue;   
    }
    if (! myCheck2.checked && testNumber > 96 && testNumber < 123) {
        continue;
    }
    if (! myCheck3.checked && testNumber > 0 && testNumber < 48) {
        continue;
    }
    if (! myCheck3.checked && testNumber > 90 && testNumber < 97) {
        continue;
    }
    if (! myCheck3.checked && testNumber > 57 && testNumber < 65) {
        continue;
    }
    if (! myCheck4.checked && testNumber > 47 && testNumber < 58) {
        continue;
    }


    newPass = newPass + String.fromCharCode(testNumber);

    





    charNumber++;

    
}

window.alert("Your new password is " + newPass);


}