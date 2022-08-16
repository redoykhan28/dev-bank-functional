//deposit start,
document.getElementById('deposite-btn').addEventListener('click', function () {

    //inputvalue(deposit)
    let NewDeposit = getElementsFromInput('deposite-input');

    //sectionValue(deposit)
    let PrevDeposit = getElementFromSection('diposite-section');

    //total diposit
    let totalDeposit = NewDeposit + PrevDeposit;

    //assign value to deposit section,
    let finalDesposit = finalValue('diposite-section', totalDeposit);

    // sectionValue(balance)
    let PrevBalance = getElementFromSection('balance-section');

    //total diposit
    let totalBalance = PrevBalance + NewDeposit;

    //assign value to balance section,
    let finalBalance = finalValue('balance-section', totalBalance);

});