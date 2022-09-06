const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');
web3.eth.personal.getAccounts(function (item, data) {
    console.log(data);
    const account = data[3];
    web3.eth.personal.unlockAccount(account, "asdfdf", 360000, function (result) {
        console.log(account, result);
    });

    web3.eth.getBalance(account, console.log)

    // 100984447989000000000
    // 100981178700000000000
    // 100981178700000000000
    // 100978178700000000000

    // 100974603368000000000
    // 100974580998000000000
    // 100974558628000000000
    // 100974348628000000000

    // 22369999994880
})



