import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum TiposVehiculos {} //COMPLETAR <---------------------',

@Schema()
export class Vehiculo {
  @Prop()
  patente: String;

  @Prop()
  marca: string;

  @Prop()
  modelo: string;

  @Prop()
  año: Date;

  @Prop()
  carga: number;

  @Prop()
  volumen: number;

  @Prop()
  peso: number;

  @Prop()
  tipo: TiposVehiculos;

  @Prop()
  EmpresaPerteneciente: string;
}

export const VehiculoSchema = SchemaFactory.createForClass(Vehiculo);
