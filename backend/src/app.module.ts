import { Module } from '@nestjs/common';
import { PolygonIdModule } from './polygon-id/polygon-id.module';
import { LighthouseModule } from './lighthouse/lighthouse.module';

@Module({
  imports: [PolygonIdModule, LighthouseModule],
})
export class AppModule {}
