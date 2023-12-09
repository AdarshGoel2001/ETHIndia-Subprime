import { Injectable } from '@nestjs/common';
import lighthouse from '@lighthouse-web3/sdk';
import { LighthouseDto } from './dto';

@Injectable()
export class LighthouseService {
  encryptJSON(dto: LighthouseDto) {

    
    return {
      encryptedData: dto,
    };
  }
}
