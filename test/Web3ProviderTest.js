const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/7dc6b83ee508404b8122df710668c591'));


async function getBalance () {
    // wei是以太坊上的的最小单位，ether小数点后18位为一个wei
    const address = '0x415feD566D92c7b9C4c610A797dc8a8E9a2b7FF6';
    var balanceWei = await web3.eth.getBalance(address);
    // 从wei转换成ether
    //var balance = web3.fromWei(balanceWei, 'ether');
    console.log(balanceWei);
    //console.log(balance);
}

async function accounts() {
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
}

async function getTransaction() {
    var transaction = await web3.eth.getTransaction('0x9b5a066740f2253a1a3fabdba4e270f15dca32d6e48788009bee1b81ce9db546');
    console.log(transaction)
}

getTransaction().then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });