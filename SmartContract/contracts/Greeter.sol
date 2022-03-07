//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {

    string private _greeting;

    event GreetingUpdate(string oldStr, string newStr);

    constructor(string memory greeting) {
        console.log("Deploying a Greeter with greeting:", greeting);
        _greeting = greeting;
    }

    function getGreeting() public view returns (string memory) {
        return _greeting;
    }

    function setGreeting(string memory greeting) public {
        console.log("Changing greeting from '%s' to '%s'", _greeting, greeting);
        _greeting = greeting;
        emit GreetingUpdate(_greeting, greeting);
    }
}
