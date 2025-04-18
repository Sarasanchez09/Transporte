import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Chofer {
  @Prop()
  nombreCompleto: string;

  @Prop()
  dni: string;

  @Prop()
  fechaNacimiento: Date;

  @Prop()
  empresa: string;

  @Prop()
  vehiculo: number;
}

export const ChoferSchema = SchemaFactory.createForClass(Chofer);
