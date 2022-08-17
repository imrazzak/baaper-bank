// set deposit & balance
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositFieldText = document.getElementById('deposit-field');
    const depositField = parseFloat(depositFieldText.value);
    // get and set deposit
    const depositBalance = document.getElementById('deposit-total');
    const depositBalanceText = depositBalance.innerText;
    const prevdepositBalance = parseFloat(depositBalanceText);
    // set total deposit
    depositBalance.innerText = depositField + prevdepositBalance;
    // set total balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const prevTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = prevTotalBalance + depositField;

    // clear deposit field
    depositFieldText.value = '';
})
// set withdraw and balance
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawFieldText = document.getElementById('withdraw-field');
    const withdrawField = parseFloat(withdrawFieldText.value);

    // get and set withdraw balance
    const withdrawBalance = document.getElementById('withdraw-total');
    const withdrawBalanceText = withdrawBalance.innerText;
    const prevWithdrawTotal = parseFloat(withdrawBalanceText);
    // set total withdraw
    withdrawBalance.innerText = prevWithdrawTotal + withdrawField;

    // set total balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const prevTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = prevTotalBalance - withdrawField;

    // clear withdraw Field
    withdrawFieldText.value = '';
})
