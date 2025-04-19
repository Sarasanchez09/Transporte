import { ApiProperty } from '@nestjs/swagger';
import { TiposVehiculos } from '../Schemas/vehiculo.schema';
import { IsDate, IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateVehiculoDto {
  @ApiProperty({ description: 'patente del vehiculo' })
  @IsString()
  patente: String;

  @ApiProperty({ description: 'marca del vehiculo' })
  @IsString()
  marca: string;

  @ApiProperty({ description: 'modelo del vehiculo' })
  @IsString()
  modelo: string;

  @ApiProperty({ description: 'año del vehiculo' })
  @IsDate()
  año: Date;

  @ApiProperty({ description: 'carga del vehiculo ' })
  @IsNumber()
  carga: number;

  @ApiProperty({ description: 'volumen de carga ' })
  @IsNumber()
  volumen: number;

  @ApiProperty({ description: 'peso del vehiculo' })
  @IsNumber()
  peso: number;

  @ApiProperty({ description: 'tipo de vehiculo' })
  @IsEnum(TiposVehiculos)
  tipo: TiposVehiculos;

  @ApiProperty({ description: 'domicilio fiscal de la empresa' })
  @IsString()
  EmpresaPerteneciente: string;
}
