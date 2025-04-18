import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateEmpresaDto {
  @ApiProperty({ description: 'razon social de la empresa' })
  @IsString()
  razonSocial: string;

  @ApiProperty({ description: 'CUIT / RUT de la empresa ' })
  @IsNumber()
  CUIT: Number;

  @ApiProperty({ description: 'domicilio fiscal de la empresa' })
  @IsString()
  domicilio: string;

  @ApiProperty({ description: 'datos del contacto de la empresa' })
  @IsString()
  datos: string;
}
