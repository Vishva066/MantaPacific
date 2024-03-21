// SPDX-License-Identifier: MIT

pragma solidity 0.8.6;

//contract name is MyFirstContract
contract UserDetails {

    uint private age;

    function setage(uint _age) public {
        age = _age;
    }

    function getage() public view  returns(uint){

        return age;

    }

}
