import { Injectable } from '@nestjs/common';
import { CreateFurnitureDto } from './dto/create-furniture.dto.js';
import { UpdateFurnitureDto } from './dto/update-furniture.dto.js';

@Injectable()
export class FurnituresService {
  create(createFurnitureDto: CreateFurnitureDto) {
    return 'This action adds a new furniture';
  }

  findAll() {
    return `This action returns all furnitures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} furniture`;
  }

  update(id: number, updateFurnitureDto: UpdateFurnitureDto) {
    return `This action updates a #${id} furniture`;
  }

  remove(id: number) {
    return `This action removes a #${id} furniture`;
  }
}
