const { ethers } = require('hardhat');

async function main() {
    const Vault = await ethers.getContractFactory('Vault');
    const vault = await Vault.deploy();

    await vault.waitForDeployment();
    await vault.deploymentTransaction().wait(3);

    console.log('Vault deployed to:', await vault.getAddress());

    const Router = await ethers.getContractFactory('Router');
    const router = await Router.deploy(await vault.getAddress());

    await router.waitForDeployment();
    await router.deploymentTransaction().wait(3);

    await vault.setRouter(await router.getAddress());

    console.log('Router deployed to:', await router.getAddress());

    console.log('--------------------------------------------');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
