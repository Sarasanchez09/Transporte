import { Module } from '@nestjs/common';
import { ViajeService } from './viaje.service';
import { ViajeController } from './viaje.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Viaje, ViajesSchema } from './Schemas/viaje.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Viaje.name, schema: ViajesSchema }]),
  ],
  controllers: [ViajeController],
  providers: [ViajeService],
})
export class ViajeModule {}
