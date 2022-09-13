/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-truffle5");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/7dc6b83ee508404b8122df710668c591",
      accounts: ["2afd0e40191e644cf818fefde0925ca6cb4932e1b049178cfe0b3a670ae784db"],
    },
  },
  solidity: "0.7.3",
};
