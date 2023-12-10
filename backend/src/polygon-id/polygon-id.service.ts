import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PolygonIdService {
  async createClaim(
    issuerIdentifier,
    polygonIdServiceURL,
    id,
    creditScore,
    age,
    minSal,
  ) {
    try {
      const res = await axios.post(
        polygonIdServiceURL + '/v1/' + issuerIdentifier + '/claims',
        {
          credentialSchema:
            'ipfs://QmespX5Ya8urmMWvprtAHsF15Mq8Zcq8LPfKtKphncgrV4',
          type: 'custom',
          credentialSubject: {
            id: id,
            creditScore: creditScore,
            age: age,
            minSal: minSal,
          },
        },
        {
          auth: { username: 'user-issuer', password: 'password-issuer' },
        },
      );

      return res.data.id;
    } catch (e) {
      console.log(e);
    }
  }
}
