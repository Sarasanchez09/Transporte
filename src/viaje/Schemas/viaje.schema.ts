import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Viaje {
  @Prop()
  id: string;

  @Prop()
  DepOrigen: string;

  @Prop()
  fechaYHoraInicio: string;

  @Prop()
  fechaYHoraDestino: string;
}

export const ViajesSchema = SchemaFactory.createForClass(Viaje);
