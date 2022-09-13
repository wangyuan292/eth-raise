const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/7dc6b83ee508404b8122df710668c591'));

async function main () {
    // wei是以太坊上的的最小单位，ether小数点后18位为一个wei
    var balanceWei = await web3.eth.getBalance("0x415feD566D92c7b9C4c610A797dc8a8E9a2b7FF6");
    // 从wei转换成ether
    //var balance = web3.fromWei(balanceWei, 'ether');
    console.log(balanceWei);
    //console.log(balance);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });