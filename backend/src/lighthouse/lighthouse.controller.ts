import { Body, Controller, Post } from '@nestjs/common';
import lighthouse from '@lighthouse-web3/sdk';
import { LighthouseService } from './lighthouse.service';
import { ethers } from 'ethers';

@Controller('lighthouse')
export class LighthouseController {
  private wallet;
  constructor(private readonly lighthouseService: LighthouseService) {
    this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  }

  @Post('uploadToLigthhouse')
  async uploadToLightHouse(@Body() body: any) {
    try {
      const text = JSON.stringify('fjfjnjfdj');
      //   const userAddress = body.userAddress;
      const lighthouse_api = '8a676d39.af3d62f419874c12b2bf7e91f582b57e';
      const public_key = '0x6EB4118E0870e0b7572B42C11BBc4C3DD4908e46';
      const signature = await this.wallet.signMessage(text);

      const response = await lighthouse.textUploadEncrypted(
        text,
        lighthouse_api,
        public_key,
        signature,
      );

      //   console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
}
