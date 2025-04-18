import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Vehiculo')
@Controller('vehiculo')
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @ApiOperation({ description: 'crear un vehiculo' })
  @Post()
  create(@Body() createVehiculoDto: CreateVehiculoDto) {
    return this.vehiculoService.create(createVehiculoDto);
  }

  @ApiOperation({ description: 'Obtener todos los vehiculos' })
  @Get()
  findAll() {
    return this.vehiculoService.findAll();
  }

  @ApiOperation({ description: 'Obtener un vehiculo por ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiculoService.findOne(+id);
  }

  @ApiOperation({ description: 'Actualizar un vehiculo' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVehiculoDto: UpdateVehiculoDto,
  ) {
    return this.vehiculoService.update(+id, updateVehiculoDto);
  }

  @ApiOperation({ description: 'eliminar un vehiculo' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiculoService.remove(+id);
  }
}
