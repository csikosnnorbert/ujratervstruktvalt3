// A main.js változtatása a 6. Kódoptimalizálás - Függvény paraméterezése leckében
function calcAmount() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);    
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
    
    
}

function showSumPrice(price, amountNumber) {
    amountNumber = amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");
    if ( amountNumber > 10 ) {
        alert("Maximum 10 terméket vásárolhat!");
        
    } else if ( amountNumber < 1 ) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}


// Add helptext.
let helpText = document.createElement("small");
helpText.class = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

//Eseménykezelők hozzáadása HTML elemekhez
//Window events.
let sendButton = document.querySelector("form .btn.btn-primary");
/*
sendButton.onclick = function() {
    alert("Hello JS!");
}
*/
sendButton.addEventListener("click", function() {
    alert("Hello JS!");
});
