// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

interface IVault {}

contract router {
    address public owner;
    address public gov;
    mapping(address => bool) public users;
    mapping(address => bool) public lenders;
    IVault vault;

    constructor(address _vault) {
        vault = IVault(_vault);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function setOwner(address _owner) public onlyOwner {
        owner = _owner;
    }

    function whitelistUsers(address _user) public onlyOwner {
        users[_user] = true;
    }

    function whitelistLenders(address _lender) public onlyOwner {
        lenders[_lender] = true;
    }

    function removeUsers(address _user) public onlyOwner {
        users[_user] = false;
    }

    function removeLenders(address _lender) public onlyOwner {
        lenders[_lender] = false;
    }

    function setGov(address _gov) public onlyOwner {
        gov = _gov;
    }

    function createCreditOffer() public {
        // create credit Offer and send to main contract for storage
    }

    function signCreditOffer() public {
        // sign credit Offer and send to main contract for storage
    }

    function payDues() public {
        // pay dues and send to main contract
    }

    function payMerchant() public {
        // create bill and send to main contract
    }
}
