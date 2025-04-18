import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Empresa {
  @Prop()
  razonSocial: string;

  @Prop()
  CUIT: number;

  @Prop()
  domicilio: string;

  @Prop()
  datos: string;
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);
