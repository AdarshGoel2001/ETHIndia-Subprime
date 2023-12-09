import { Module } from '@nestjs/common';
import { LighthouseController } from './lighthouse.controller';
import { LighthouseService } from './lighthouse.service';

@Module({
  controllers: [LighthouseController],
  providers: [LighthouseService]
})
export class LighthouseModule {}
