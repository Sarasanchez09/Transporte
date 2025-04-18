import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ViajeService } from './viaje.service';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Viaje')
@Controller('viaje')
export class ViajeController {
  constructor(private readonly viajeService: ViajeService) {}

  @ApiOperation({ description: 'crear un viaje' })
  @Post()
  create(@Body() createViajeDto: CreateViajeDto) {
    return this.viajeService.create(createViajeDto);
  }

  @ApiOperation({ description: 'Obtener todos los viajes' })
  @Get()
  findAll() {
    return this.viajeService.findAll();
  }

  @ApiOperation({ description: 'Obtener un vehiculo por ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.viajeService.findOne(+id);
  }

  @ApiOperation({ description: 'Actualizar  vehiculo por ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateViajeDto: UpdateViajeDto) {
    return this.viajeService.update(+id, updateViajeDto);
  }

  @ApiOperation({ description: 'Eliminar un vehiculo por ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.viajeService.remove(+id);
  }
}
