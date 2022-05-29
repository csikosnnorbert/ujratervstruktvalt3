// console.log("Hello, this is a console message.") - Lecke elején lévő egyszerű példa

/* function calcAmount() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amount = parseInt(amountInput.value)*price
    // alert("Fizetendő: " + amount + "Ft");

    showAmount.innerHTML = amount;
} */

function calcAmount() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    if (isNaN(amountNumber)) {
        amountNumber = 0;
    }

    // Egyenlő ugyanezzel: (rövidített if)

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    // A többi rész:

    if ( amountNumber > 10 ) {
        alert("Maximum 10 terméket vásárolhat!");
        
    } else if ( amountNumber < 1 ) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = parseInt(amountInput.value) * price;
        showAmount.innerHTML = amount;
    }

}




    