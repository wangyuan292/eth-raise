const hardhat = require("hardhat");

async function main() {
    // 获取合约文件
    //const Greeter = await hardhat.ethers.getContractFactory("Greeter");
    const Greeter = artifacts.require("Greeter");
    // 获取合约部署的对象
    const greeter = await Greeter.deploy("Hello, Hardhat!");
    // 执行部署
    await greeter.deployed();
    // 打印一下部署的结果
    console.log("Greeter deployed to:", greeter.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
