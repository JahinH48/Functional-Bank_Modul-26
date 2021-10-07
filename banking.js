function getInput(Input) {
    const depositInput = document.getElementById(Input);
    const depositAmount = depositInput.value;
    const intDepositAmount = parseFloat(depositAmount);

    // clare inpute 

    depositInput.value = '';

    return intDepositAmount;

}

function id(jisan, intDepositAmount) {
    const depositTotal = document.getElementById(jisan);
    const depositTotalText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(depositTotalText);

    const newDepositTotalAmount = intDepositAmount + previousDepositAmount;
    depositTotal.innerText = newDepositTotalAmount;


}

function total(newDepositTotalAmount) {
    const blanceTotale = document.getElementById('balance-total');
    const blanceTotaleText = blanceTotale.innerText;
    const floatBlanceTotal = parseFloat(blanceTotaleText);
    blanceTotale.innerText = floatBlanceTotal + newDepositTotalAmount;
}
function getCurrentBalance() {
    const blanceTotale = document.getElementById('balance-total');
    const blanceTotaleText = blanceTotale.innerText;
    const floatBlanceTotal = parseFloat(blanceTotaleText);

    return floatBlanceTotal;
}

function updateBlance(intDepositAmount, isAdd) {
    const blanceTotale = document.getElementById('balance-total');/*
     const blanceTotaleText = blanceTotale.innerText;
     const floatBlanceTotal = parseFloat(blanceTotaleText); */
    const floatBlanceTotal = getCurrentBalance();
    if (isAdd == true) {
        blanceTotale.innerText = floatBlanceTotal + intDepositAmount;
    } else {
        blanceTotale.innerText = floatBlanceTotal - intDepositAmount;

    }
}



document.getElementById('deposit-button').addEventListener('click', function () {
    const intDepositAmount = getInput('deposit-input');
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const intDepositAmount = parseFloat(depositAmount); */

    if (intDepositAmount > 0) {
        id('deposit-total', intDepositAmount);
        updateBlance(intDepositAmount, true);
    } else {
        alert('Enter Possitive Namber')
    }

    /*  const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
     const previousDepositAmount = parseFloat(depositTotalText);
 
     const newDepositTotalAmount = intDepositAmount + previousDepositAmount;
     depositTotal.innerText = newDepositTotalAmount; */



    // total blance 


    /* const blanceTotale = document.getElementById('balance-total');
    const blanceTotaleText = blanceTotale.innerText;
    const floatBlanceTotal = parseFloat(blanceTotaleText);
    blanceTotale.innerText = floatBlanceTotal + intDepositAmount;
 */

});

// withdraw 

document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const withdrawValueFloat = parseFloat(withdrawValue); */
    const withdrawValueFloat = getInput('withdraw-input');

    if (withdrawValueFloat > 0 && withdrawValueFloat < getCurrentBalance()) {
        id('withdraw-total', withdrawValueFloat);
        updateBlance(withdrawValueFloat, false);
    }
    else if (withdrawValueFloat > getCurrentBalance()) {
        alert('Blance Is Low');
    } else {
        alert('Enter Possitive Namber')
    }
    /* const withdrawTotale = document.getElementById('withdraw-total');
    const withdrawTotleText = withdrawTotale.innerText;
    const withdrawTotleAmount = parseFloat(withdrawTotleText);
    const newTotaleWithdraw = withdrawTotleAmount + withdrawValueFloat;
    withdrawTotale.innerText = newTotaleWithdraw; */

    // Totale Amount in withdraw 
    /*  const totalAmount = document.getElementById('balance-total');
     const totalblance = totalAmount.innerText;
     const totalBlanceFload = parseFloat(totalblance);
     totalAmount.innerText = totalBlanceFload - withdrawValueFloat; */
    // updateBlance(withdrawValueFloat, false);




    /* // clear inpute data 

    withdrawInput.value = ''; */
})