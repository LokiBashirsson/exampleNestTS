import { Module } from '@nestjs/common';
import { FurnituresService } from './furnitures.service.js';
import { FurnituresController } from './furnitures.controller.js';

@Module({
  controllers: [FurnituresController],
  providers: [FurnituresService],
})
export class FurnituresModule {}
