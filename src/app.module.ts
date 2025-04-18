import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { EmpresaModule } from './empresa/empresa.module';
import { DepositoModule } from './deposito/deposito.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { ViajeModule } from './viaje/viaje.module';
import { ChoferModule } from './chofer/chofer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot('mongodb://admin:admin1234@localhost:27017/'),
    BookModule,
    EmpresaModule,
    DepositoModule,
    VehiculoModule,
    ViajeModule,
    ChoferModule,
  ],
})
export class AppModule {}
