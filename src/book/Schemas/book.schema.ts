import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  ADVENTURE = 'Adventure',
  HISTORY = 'History',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
}

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  autor: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
