
const Web3 = require('web3');
const abi = require("../artifacts/contracts/Storage.sol/Storage.json").abi;
const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/7dc6b83ee508404b8122df710668c591'));

const accountFrom = {
    privateKey: '2afd0e40191e644cf818fefde0925ca6cb4932e1b049178cfe0b3a670ae784db',
};

// Storage goerli 0xB9FcffCe4066944754c52800Be0D5d28697EecC7
// TransferTest goerli  0xdbf58C0869aC7fed77B3164661C56A5907c64F64
const contractAddress = "0xB9FcffCe4066944754c52800Be0D5d28697EecC7";
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


//---------------------------------storage Test------------------------------------

async function storeNumber() {

    const ttcTx = transferTestContract.methods.store(99);
    const createTransaction = await web3.eth.accounts.signTransaction(
        {
            to: contractAddress,
            data: ttcTx.encodeABI(),
            gas: 20000000,
        },
        accountFrom.privateKey
    );
    const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);

    console.log("storeNumber number");
};

async function retrieveNumber() {
    // 查询余额
    const number = await transferTestContract.methods.retrieve().call();
    console.log("retrieveNumber number", number);
};

async function mapTestFun() {
    await transferTestContract.methods.mapTestFun(99, "owen").call();
    console.log("mapTestFun success");
};

async function getMapFun() {
    const name = await transferTestContract.methods.getMapFun(99).call();
    console.log("getMapFun name", name);
};


retrieveNumber().then(() => process.exit(0)).catch(error => {
        console.error(error);
        process.exit(1);
    });
