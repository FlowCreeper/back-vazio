import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async findAll() {
    return this.cardsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cardsService.findOne(id);
  }

  @Post()
  async create(@Body() createCardDto: CreateCardDto) {
    return this.cardsService.create(createCardDto)
  }
}
