import { Module } from '@nestjs/common';
import { PolygonIdModule } from './polygon-id/polygon-id.module';

@Module({
  imports: [PolygonIdModule],
})
export class AppModule {}
