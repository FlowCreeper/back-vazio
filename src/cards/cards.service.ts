import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './cards.schema';
import { Model } from 'mongoose';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}

  async findAll(): Promise<Card[]> {
    return this.cardModel.find().exec();
  }

  async findOne(id: string): Promise<Card> {
    return (await this.cardModel.find({ _id: id }).exec()).at(0);
  }

  async create(createCardDto: CreateCardDto): Promise<Card> {
    const createdCard = new this.cardModel(createCardDto);
    return createdCard.save();
  }
}
