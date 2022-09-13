const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');
web3.eth.getTransaction('0x0c217680fc9663481c262f3defd0f09c97b36d045ad9d1645aa9a27f94765314')
    .then(console.log);
