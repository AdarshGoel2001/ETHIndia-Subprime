// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

interface IVault {
    function getAllRequests() external view returns (IVault.Request[] memory);
}

contract router {
    address private owner;
    address private gov;
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

    function labelUsers(address _user, bool value) public onlyOwner {
        users[_user] = value;
    }

    function labelLenders(address _lender, bool value) public onlyOwner {
        lenders[_lender] = value;
    }

    function setGov(address _gov) public onlyOwner {
        gov = _gov;
    }

    function getAllRequests() public view returns (IVault.Request[] memory) {
        return vault.getAllRequests();
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
