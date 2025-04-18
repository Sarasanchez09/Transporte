import { ApiProperty } from '@nestjs/swagger';

export class CreateChoferDto {
  @ApiProperty({ description: 'nombre completo del chofer' })
  nombreCompleto: string;

  @ApiProperty({ description: 'DNI/identidad del chofer' })
  dni: number;

  @ApiProperty({ description: 'fecha de nacimiento' })
  fechaNacimiento: Date;

  @ApiProperty({ description: 'empresa transportista perteneciente.' })
  empresa: string;

  @ApiProperty({ description: 'vehiculo asignado' })
  vehiculo: string;
}
