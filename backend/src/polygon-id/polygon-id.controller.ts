import { Body, Controller, OnModuleInit, Post } from '@nestjs/common';
import { PolygonIdService } from './polygon-id.service';
import axios from 'axios';

@Controller('polygon-id')
export class PolygonIdController implements OnModuleInit {
  private polygonIdServiceURL: string;
  private issuerIdentifier: any;

  constructor(private readonly polygonIdService: PolygonIdService) {
    this.polygonIdServiceURL = 'https://a4a8-14-195-9-98.ngrok-free.app';
  }

  async onModuleInit() {
    try {
      const res = await axios.post(
        `${this.polygonIdServiceURL}/v1/identities`,
        {
          didMetadata: {
            method: 'polygonid',
            blockchain: 'polygon',
            network: 'mumbai',
            type: 'BJJ',
          },
        },
        {
          auth: { username: 'user-issuer', password: 'password-issuer' },
        },
      );

      console.log('Polygon ID Service Initialized');
      this.issuerIdentifier = res.data.identifier;
      console.log('Issuer Identifier: ', this.issuerIdentifier);
    } catch (e) {
      console.log(e);
    }
  }

  @Post('verifyKYC')
  async verifyKYC(@Body() body) {
    try {
      const id = await this.polygonIdService.createClaim(
        this.issuerIdentifier,
        this.polygonIdServiceURL,
        body.id,
        Number(body.creditScore),
        Number(body.age),
        Number(body.minSal),
      );

      console.log('Claim ID: ', id);
      console.log(
        this.polygonIdServiceURL +
          '/v1/' +
          this.issuerIdentifier +
          '/claims/' +
          id +
          '/qrcode',
      );
      const qrCodeData = await axios.get(
        this.polygonIdServiceURL +
          '/v1/' +
          this.issuerIdentifier +
          '/claims/' +
          id +
          '/qrcode',
        {
          auth: { username: 'user-issuer', password: 'password-issuer' },
        },
      );

      return qrCodeData.data;
    } catch (e) {
      console.log(e);
    }
  }
}
