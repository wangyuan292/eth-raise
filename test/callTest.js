const abiJson = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_expectAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "LogUint",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "toAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferEvent",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getBalanceOfAddress",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalanceOfContract",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getExpectAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_outAmountAddress",
                "type": "address"
            }
        ],
        "name": "transderToAddress",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "transderToContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];


const Web3 = require('web3');
const abi = require("../artifacts/contracts/TransferTest.sol/TransferTest.json").abi;
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/7dc6b83ee508404b8122df710668c591'));

const accountFrom = {
    privateKey: '2afd0e40191e644cf818fefde0925ca6cb4932e1b049178cfe0b3a670ae784db',
};
const contractAddress = "0xa689B1BD023bcF73fC6430F915C09A8cd8916951";
const accountAddress = "0x415feD566D92c7b9C4c610A797dc8a8E9a2b7FF6";

const transferTestContract = new web3.eth.Contract(abi, contractAddress, {
    from: accountAddress
});

//--------------------------查询------------------------------

//查询账号余额
async function getBalanceOfAddress() {
    // 查询余额
    const tokenBalance = await transferTestContract.methods.getBalanceOfAddress(accountAddress).call();
    console.log("getBalanceOfAddress tokenBalance", tokenBalance);
};

//查询合约账号余额
async function getBalanceOfContract() {
    // 查询余额
    const tokenBalance = await transferTestContract.methods.getBalanceOfContract().call();
    console.log("getBalanceOfContract tokenBalance", tokenBalance);
};


//--------------------------交易------------------------------

async function transderToContract() {
    const ttcTx = transferTestContract.methods.transderToContract();
    const createTransaction = await web3.eth.accounts.signTransaction(
        {
            to: contractAddress,
            value: web3.utils.toWei('0.0009', 'ether'),
            data: ttcTx.encodeABI(),
            gas: 20000000,
        },
        accountFrom.privateKey
    );
    const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
    console.log(`Tx successful with hash: ${createReceipt.transactionHash}`);
}

// async function transderToContract() {
//     await transferTestContract.methods.transderToContract().send({from: accountAddress})
//         .then(function (receipt) {
//             console.log("transderToContract call result", receipt);
//         })
//         .catch((error) => {
//             console.error( error);
//         });
// }

async function transderToAddress() {
    await transferTestContract.methods.transderToAddress(contractAddress).send({from: accountAddress})
        .then(function (receipt) {
            console.log("transderToAddress call result", receipt);
        })
        .catch((error) => {
            console.error( error);
        });
}

transderToContract().then(() => process.exit(0)).catch(error => {
        console.error(error);
        process.exit(1);
    });
