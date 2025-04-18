import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Vehiculo {
  @Prop()
  datos: string;

  @Prop()
  Tecnica: number;

  @Prop()
  EmpresaPerteneciente: string;
}

export const VehiculoSchema = SchemaFactory.createForClass(Vehiculo);
