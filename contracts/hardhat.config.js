require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: '0.8.19',

    networks: {
        testnet: {
            chainId: 421613,
            blockConfirmations: 1,
            url: `${process.env.ARBITRUM_GOERLI_TESTNET}`,
            accounts: [`${process.env.PRIVATE_KEY}`],
        },
        mumbai: {
            chainId: 80001,
            blockConfirmations: 1,
            url: `${process.env.MUMBAI_TESTNET}`,
            accounts: [`${process.env.PRIVATE_KEY}`],
        },
    },
    etherscan: {
        apiKey: `${process.env.ETHERSCAN_API_KEY}`,
    },
};
