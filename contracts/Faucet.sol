// SPDX-License-Identifier: SimPL-2.0
pragma solidity ^0.7.0;

contract Faucet {
    uint cnt;
    function call() public returns(uint) {
        cnt ++;
        return cnt;
    }
}
