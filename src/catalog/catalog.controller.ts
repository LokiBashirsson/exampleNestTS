import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatalogService } from './catalog.service.js';
import { CreateCatalogDto } from './dto/create-catalog.dto.js';
import { UpdateCatalogDto } from './dto/update-catalog.dto.js';
import { ParseIntPipe } from '../conception/parseInt.pipe.js';
import { AuthGuard } from '../conception/guard.js';
import { loggerInterceptor } from '../conception/interceptor.js';

@Controller('catalog')
// @UseInterceptors(loggerInterceptor)
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Post()
  create(@Body() createCatalogDto: CreateCatalogDto) {
    return this.catalogService.create(createCatalogDto);
  }

  // @Get()
  // @UseGuards(AuthGuard)
  // findAll(@Query('page', ParseIntPipe) page: number) {
  //   console.log('Page number:', page);
  //   return this.catalogService.findAll();
  // }
  @Get()
  findAll() {
    return this.catalogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catalogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatalogDto: UpdateCatalogDto) {
    return this.catalogService.update(+id, updateCatalogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalogService.remove(+id);
  }
}
