// index.mjs

import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { ethers } from "ethers";

/**
 * Private key of the user can be exported from any wallet such as Metamask
 * Note - One should use a .env file to store the private key and make sure it is not committed to the repository
 * Ideal code - const signer = new ethers.Wallet(`0x${prcoess.env.PRIVATE_KEY}`)
 * For this tutorial we will be using a random private key
 */
// const aliceSigner = new ethers.Wallet.createRandom();
const aliceAddress = await aliceSigner.getAddress();

const bobSigner = new ethers.Wallet.createRandom();
const bobAddress = await bobSigner.getAddress();

/** Initialization */
const userAlice = await PushAPI.initialize(aliceSigner, { env: "prod" });
const userBob = await PushAPI.initialize(bobSigner, { env: "prod" });

/** Get details of the initialized user */
const userAliceInfo = await userAlice.info();

const updatedUserAliceProfileInfo = await userAlice.profile.update({
  name: "Alice",
});