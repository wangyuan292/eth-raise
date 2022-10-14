// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.7.0;

contract Storage {

    uint256 number;
    mapping (uint256 => string) mapTest;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number += num;
    }

    /**
     * @dev Return value
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }

    function mapTestFun(uint num, string memory name) public {
        mapTest[num] = name;
    }

    function getMapFun(uint num) public view returns (string memory) {
        return mapTest[num];
    }
}
