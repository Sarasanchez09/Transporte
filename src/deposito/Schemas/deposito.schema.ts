import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Deposito {
  @Prop()
  Localizacion: string;

  @Prop()
  tipo: string;

  @Prop()
  horario: string;

  @Prop()
  contacto: string;
}

export const DepositoSchema = SchemaFactory.createForClass(Deposito);
