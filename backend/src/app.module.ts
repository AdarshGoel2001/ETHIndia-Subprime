import { Module } from '@nestjs/common';
import { LighthouseModule } from './lighthouse/lighthouse.module';

@Module({

  imports: [LighthouseModule]
})
export class AppModule {}
