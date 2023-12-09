// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "./Vault.sol";

contract Router {
    address private owner;
    Vault vault;

    constructor(address _vault) {
        vault = Vault(_vault);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function setOwner(address _owner) public onlyOwner {
        owner = _owner;
    }

    function createRequest(
        uint256 _amount,
        uint256 _interest,
        uint256 _duration
    ) external {
        vault.createRequest(msg.sender, _amount, _interest, _duration);
    }

    function getAllRequests() external view returns (Vault.Request[] memory) {
        return vault.getAllRequests();
    }

    function getNotNullLenderRequests(
        address _lender
    ) external view returns (Vault.Request[] memory) {
        return vault.getNotNullLenderRequests(_lender);
    }

    function removeBorrowerFromRequest(uint256 id) external {
        vault.removeBorrowerFromRequest(msg.sender, id);
    }

    function addBorrowerToRequest(uint256 id, address _borrower) external {
        vault.addBorrowerToRequest(msg.sender, id, _borrower);
    }

    function convertRequestToOffer(uint256 id) external {
        vault.convertRequestToOffer(msg.sender, id);
    }

    function payDues(uint256 id) external {
        vault.payDues(msg.sender, id);
    }

    function checkForDefaulters() external returns (Vault.Request[] memory) {
        return vault.checkForDefaulters(msg.sender);
    }

    function getAllDefaulterAddress() external view returns (address[] memory) {
        return vault.getAllDefaulterAddress();
    }

    function getBorrowerRequest()
        external
        view
        returns (Vault.Request[] memory)
    {
        return vault.getBorrowerRequest(msg.sender);
    }
}
