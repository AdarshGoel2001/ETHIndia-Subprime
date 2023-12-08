// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Vault {
   
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

    function clearGarbage() public {
        for (uint256 i = 0; i < loans.length; i++) {
            if (loans[i].signed == false && loans[i].genesisTime + 30 days < block.timestamp) {
                delete loans[i];
            }
        }
    }
}
