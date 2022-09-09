// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.7.0;

contract InvokeTest {

    event testEvent(address indexed contractAdd, uint8 age, string indexed name);
    mapping(string => uint8) studentsMap;

    struct Student {
        string name;
        uint8 age;
    }

    Student[] students; // 学生

    function setStudent(string memory _name, uint8 _age) public returns(bool) {
        students.push(Student({name:_name, age:_age}));
        studentsMap[_name] = _age;
        return true;
    }

    function getAge(string memory _name) public view returns(uint8) {
        return studentsMap[_name];
    }

}