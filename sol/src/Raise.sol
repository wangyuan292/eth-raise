pragma solidity ^0.4.0;

/**
 * 疾病筹款
 */
contract Raise {
    address owner;
    bytes32 name; // 筹款人姓名
    bytes32 sickName; // 疾病名称
    uint expectAmount; // 筹款金额
    uint total; // 总金额
    uint outAmount;

    // 捐赠人
    struct Donator {
        address sender;
        uint spent;
    }

    Donator[] donators; // 捐赠者

    constructor(uint _expectAmount) public {
        // bytes32 _name, bytes32 _sickName,
        // name = _name;
        // sickName = _sickName;
        expectAmount = _expectAmount;
        owner = msg.sender;
    }

    // 捐赠
    function fund(uint amount) public {
        require(amount < 100, "Value should be lagger than 100.");
        msg.sender.transfer(amount);
        total += amount;
        donators.push(Donator({
        sender: msg.sender,
        spent: amount
        }));
    }

    function getTotal() public view returns(uint) {
        return total;
    }

    function getExpectAmount() public view returns(uint) {
        return expectAmount;
    }

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function () public payable {}
}
