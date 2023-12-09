// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Vault {
    address private owner;
    address public router;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function setRouter(address _router) public onlyOwner {
        router = _router;
    }

    struct creditOffer {
        address lender;
        address borrower;
        uint256 amount;
        uint256 interest;
        uint256 duration;
        uint256 genesisTime;
        uint256 emi;
        bool signed;
        bool defaulted;
    }

    creditOffer[] public loans;

    function addOffer(creditOffer memory _offer) public {
        loans.push(_offer);
    }
}
