import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './cards.schema';
import { Model } from 'mongoose';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}

  findAll(): Promise<Card[]> {
    return this.cardModel.find().exec();
  }

  findOne(title: string): Promise<Card> {
    return (this.cardModel.find({title: title}).exec())[0];
  }
}
