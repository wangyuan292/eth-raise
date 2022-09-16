const hardhat = require("hardhat");

// Greeter Contract address 0xB2910BE5f673d26538354A0bf91771634625DBde  0x659fC8959F3f5F5724A211AC05D8Ab74bA32736D

// TransferTest Contract address 0xee40E17D25197C6AdF0Fa551F6CA292ee6c203F9

async function deployGreeter() {
    // 获取合约文件
    const Greeter = await hardhat.ethers.getContractFactory("Greeter");
    // 获取合约部署的对象
    const greeter = await Greeter.deploy("Hello, Hardhat!");
    // 执行部署
    await greeter.deployed();
    // 打印一下部署的结果
    console.log("Greeter deployed to:", greeter.address);
}

async function deployTransferTest() {
    // 获取合约文件
    const TransferTest = await hardhat.ethers.getContractFactory("TransferTest");
    // 获取合约部署的对象
    const transferTest = await TransferTest.deploy(10000);
    // 执行部署
    await transferTest.deployed();
    // 打印一下部署的结果
    console.log("TransferTest deployed to:", transferTest.address);
}

deployTransferTest()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
