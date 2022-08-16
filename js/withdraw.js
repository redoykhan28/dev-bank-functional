//withdraw start,
document.getElementById('withdraw-btn').addEventListener('click', function () {

    //inputvalue(withdraw)
    const newWithdraw = getElementsFromInput('withdraw-input');

    //SectionValue(withdraw)
    const prevWithdraw = getElementFromSection('withdraw-section');

    //total withdraw
    let totalWithdraw = prevWithdraw + newWithdraw;

    //assign to withdraw section
    let finalWithdraw = finalValue('withdraw-section', totalWithdraw);

    //SectionValue(balance)
    let PrevBalance = getElementFromSection('balance-section');

    //total balance
    let totalBalance = PrevBalance - newWithdraw;

    //assign to balance section
    let finalBalance = finalValue('balance-section', totalBalance);

})