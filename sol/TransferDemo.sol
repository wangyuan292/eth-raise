// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.7.0;

contract TransferDemo {

    // 向合约账户转账 
    function transderToContract() payable public {
        payable(address(this)).transfer(msg.value);
    }

    // 获取合约账户余额 
    function getBalanceOfContract() public view returns (uint256) {
        return address(this).balance;
    }

    fallback() external payable {}

    receive() external payable {}

}
// 使用的编译器版本为：0.7.5
