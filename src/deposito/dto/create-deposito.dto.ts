import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateDepositoDto {
  @ApiProperty({ description: 'razon social de la empresa' })
  @IsString()
  localizacion: string;

  @ApiProperty({ description: 'propio o de terceros ' })
  @IsString()
  tipo: string;

  @ApiProperty({
    description: 'Horarios de operación y restricciones de acceso',
  })
  @IsString()
  horarios: string;

  @ApiProperty({ description: 'Personal de contacto' })
  @IsString()
  contacto: string;
}
