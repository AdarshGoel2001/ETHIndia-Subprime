require('@nomicfoundation/hardhat-toolbox');

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
    },
};
