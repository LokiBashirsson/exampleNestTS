import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FurnituresService } from './furnitures.service.js';
import { CreateFurnitureDto } from './dto/create-furniture.dto.js';
import { UpdateFurnitureDto } from './dto/update-furniture.dto.js';

@Controller('furnitures')
export class FurnituresController {
  constructor(private readonly furnituresService: FurnituresService) {}

  @Post()
  create(@Body() createFurnitureDto: CreateFurnitureDto) {
    return this.furnituresService.create(createFurnitureDto);
  }

  @Get()
  findAll() {
    return this.furnituresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.furnituresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFurnitureDto: UpdateFurnitureDto) {
    return this.furnituresService.update(+id, updateFurnitureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.furnituresService.remove(+id);
  }
}
