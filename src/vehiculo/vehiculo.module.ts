import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehiculo, VehiculoSchema } from './Schemas/vehiculo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vehiculo.name, schema: VehiculoSchema },
    ]),
  ],
  controllers: [VehiculoController],
  providers: [VehiculoService],
})
export class VehiculoModule {}
