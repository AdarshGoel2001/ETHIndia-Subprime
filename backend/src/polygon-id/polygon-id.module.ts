import { Module } from '@nestjs/common';
import { PolygonIdController } from './polygon-id.controller';
import { PolygonIdService } from './polygon-id.service';

@Module({
  controllers: [PolygonIdController],
  providers: [PolygonIdService],
})
export class PolygonIdModule {}
