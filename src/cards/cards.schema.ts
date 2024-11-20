import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CardDocument = HydratedDocument<Card>;

@Schema()
export class Card {
  @Prop({ required: true })
  title: string;

  @Prop()
  desc: string;

  @Prop()
  img: string;

  @Prop()
  rarity: number;
}

export const CardSchema = SchemaFactory.createForClass(Card);
