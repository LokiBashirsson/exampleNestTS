import { Injectable, Query } from '@nestjs/common';
import { CreateCatalogDto } from './dto/create-catalog.dto.js';
import { UpdateCatalogDto } from './dto/update-catalog.dto.js';

@Injectable()
export class CatalogService {
  create(createCatalogDto: CreateCatalogDto) {
    return 'This action adds a new catalog';
  }

  findAll() {
    return [
      {
        image:
          'https://images.unsplash.com/photo-1682685794700-1f3e5c7d8b9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: 'Кайтагская Мебель',
        price: 100,
        discount: 0.2,
      },
      {
        image:
          'https://images.unsplash.com/photo-1682685794700-1f3e5c7d8b9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: 'Кайтагская Мебель',
        price: 100,
        discount: 0.2,
      },
      {
        image:
          'https://images.unsplash.com/photo-1682685794700-1f3e5c7d8b9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: 'Кайтагская Мебель',
        price: 100,
        discount: 0.2,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} catalog`;
  }

  update(id: number, updateCatalogDto: UpdateCatalogDto) {
    return `This action updates a #${id} catalog`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalog`;
  }
}
