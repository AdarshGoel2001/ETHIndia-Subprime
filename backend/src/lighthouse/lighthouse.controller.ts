import { Body, Controller, Post } from '@nestjs/common';
import { LighthouseService } from './lighthouse.service';
import { LighthouseDto } from './dto';

@Controller('lighthouse')
export class LighthouseController {
  constructor(private lighthouseService: LighthouseService) {}
  @Post('encrypt')
  encryptJSON(@Body() dto: LighthouseDto) {
    
    return this.lighthouseService.encryptJSON(dto);

  }
}
