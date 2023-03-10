var input = document.getElementById("myInput");
var signal = document.getElementById("signal");
var message = document.getElementById("message");

input.addEventListener("keyup", function (event) {
    if (event.getModifierState("CapsLock")) {
        signal.style.background = "red";   //Colore spia Capslook attivo
        signal.style.boxShadow = "0 0 7px red";
        message.innerText = "Capslock ON!"  //Messaggio Capslook attivo
    } else {
        signal.style.background = "#0B92E6"; //Colore spia Capslook disattivo
        signal.style.boxShadow = "0 0 7px #0B92E6";
        message.innerText = "Capslock OFF!"  //Messaggio Capslook disattivo
    }
})
