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
      'https://polygon-mumbai.g.alchemy.com/v2/rZDOy0ntdTZ-V1azveRd7trPTbLYoubM',
    );

    this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);
    this.contract = new ethers.Contract(
      '0xe4987Bd54037a32Ab5a320b9F29a1cd1196A7366',
      abi,
      this.wallet,
    );
  }

  @Post('uploadToLigthhouse')
  async uploadToLightHouse(@Body() body: any) {
    console.log(body);
    try {
      const text = JSON.stringify(body);
      const userAddress = body.userAddress;
      const lighthouse_api = '96634f64.debade1df22c48bc9c22bbbab9cc90a6';
      const public_key = '0xCD6701515a90C32f4d40D8C6b370A1FA51712794';
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

      console.log(response);

      const condition = [
        {
          id: 1,
          chain: 'Mumbai',
          method: 'publishInfo',
          standardContractType: 'Custom',
          contractAddress: '0xDea2E6B8f148A2cE6cDbCc01C21ea647DFa0c0E0',
          returnValueTest: {
            comparator: '==',
            value: 'true',
          },
          parameters: [userAddress],
          inputArrayType: ['address'],
          outputType: 'bool',
        },
      ];

      console.log('1');

      await this.contract.setCid(userAddress, response.data.Hash);

      const accessControl = await lighthouse.applyAccessCondition(
        public_key,
        response.data.Hash,
        signature,
        condition,
      );
      console.log(response.data.Hash, 'adadawdawdawdawdawd');
      return response.data.Hash;
    } catch (err) {
      console.log(err);
    }
  }
}
