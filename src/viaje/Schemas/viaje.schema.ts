import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Viaje {
  @Prop()
  id: string;

  @Prop()
  DepOrigen: String;

  @Prop()
  fechaYHoraInicio: Date;

  @Prop()
  fechaYHoraDestino: string;
}

export const ViajesSchema = SchemaFactory.createForClass(Viaje);
