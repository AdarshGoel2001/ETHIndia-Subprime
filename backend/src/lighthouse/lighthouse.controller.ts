import { Body, Controller, Post } from '@nestjs/common';
import lighthouse from '@lighthouse-web3/sdk';
import { LighthouseService } from './lighthouse.service';
import { ethers } from 'ethers';
import axios from 'axios';
import { abi } from './abi';

@Controller('lighthouse')
export class LighthouseController {
  private wallet;
  private provider;
  private contract;

  constructor(private readonly lighthouseService: LighthouseService) {
    this.provider = new ethers.JsonRpcProvider(
      'https://arbitrum-goerli.infura.io/v3/0009cbb01fe044bbac47996f2b63dd94',
    );

    this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);

    this.contract = new ethers.Contract(
      '0xADB5a7a49646E1f41249f4CBa6Df40Ad1FAE64a3',
      abi,
      this.wallet,
    );
  }

  @Post('uploadToLigthhouse')
  async uploadToLightHouse(@Body() body: any) {
    try {
      const text = JSON.stringify(body);
      const userAddress = body.userAddress;
      const lighthouse_api = '8a676d39.af3d62f419874c12b2bf7e91f582b57e';
      const public_key = '0x6EB4118E0870e0b7572B42C11BBc4C3DD4908e46';
      const message = await axios.get(
        `https://encryption.lighthouse.storage/api/message/${public_key}`,
      );
      const signature = await this.wallet.signMessage(message.data[0].message);

      const response = await lighthouse.textUploadEncrypted(
        text,
        lighthouse_api,
        public_key,
        signature,
      );

      const condition = [
        {
          id: 1,
          chain: 'Mumbai',
          method: 'publishInfo',
          standardContractType: 'Custom',
          contractAddress: '0x3d48eEF0b6321dc9f2ef72af353420D194fE13b1',
          returnValueTest: {
            comparator: '==',
            value: 'true',
          },
          parameters: [userAddress],
          inputArrayType: ['address'],
          outputType: 'bool',
        },
      ];

      await this.contract.setCid(userAddress, response.data.Hash);

      const accessControl = await lighthouse.applyAccessCondition(
        public_key,
        response.data.Hash,
        signature,
        condition,
      );

      console.log(accessControl);
    } catch (err) {
      console.log(err);
    }
  }
}
