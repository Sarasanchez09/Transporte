import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateVehiculoDto {
  @ApiProperty({ description: 'razon social de la empresa' })
  @IsString()
  datos: string;

  @ApiProperty({ description: 'CUIT / RUT de la empresa ' })
  @IsNumber()
  tecnica: String;

  @ApiProperty({ description: 'domicilio fiscal de la empresa' })
  @IsString()
  EmpresaPerteneciente: string;
}
