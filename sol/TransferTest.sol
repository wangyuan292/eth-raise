// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.7.0;

import "./Console.sol";


contract TransferTest is Console{

    bytes32 name; // 筹款人姓名
    bytes32 sickName; // 疾病名称
    uint expectAmount = 100 ether; // 筹款金额
    uint total; // 总金额
    uint outAmount;

    // 捐赠人
    struct Donator {
        address sender;
        uint spent;
    }

    Donator[] donators; // 捐赠者

    // 向合约账户转账 
    function transderToContract() payable public {
        uint256 amount = msg.value;
        log("value", amount);
        require(amount > 100, "Value should be lagger than 100.");
        payable(address(this)).transfer(amount);
        total += amount;
        donators.push(Donator({
        sender: msg.sender,
        spent: amount
        }));
    }

    // 向合约账户转账 
    function transderToAddress(address _outAmountAddress) payable public {
        uint256 amount = msg.value;
        log("value", amount);
        require(amount > 100, "Value should be lagger than 100.");
        payable(address(_outAmountAddress)).transfer(amount);
    }

    function getBalanceOfAddress() view returns(uint){
        return address(this).balance;
    }
    
    function getTotal() public view returns(uint) {
        return total;
    }

    // function getDonators() public view returns(string[] memory) {
    //     string[] memory names;
    //     for (uint8 i = 0; i < donators.length; i ++) {
    //         names.push(donators[i]);
    //     }
    //     return  names;
    // }

    function getExpectAmount() public view returns(uint) {
        return expectAmount;
    }

    function getBalanceOfContract() public view returns(uint) {
        return address(this).balance;
    }
    
    fallback() external payable {}
    
    receive() external payable {}

}
