import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChoferService } from './chofer.service';
import { CreateChoferDto } from './dto/create-chofer.dto';
import { UpdateChoferDto } from './dto/update-chofer.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Chofer')
@Controller('chofer')
export class ChoferController {
  constructor(private readonly choferService: ChoferService) {}

  @ApiOperation({ description: 'crear un chofer' })
  @Post()
  create(@Body() createChoferDto: CreateChoferDto) {
    return this.choferService.create(createChoferDto);
  }

  @ApiOperation({ description: 'Obtener todos los choferes' })
  @Get()
  findAll() {
    return this.choferService.findAll();
  }

  @ApiOperation({ description: 'Obtener un chofer por ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.choferService.findOne(+id);
  }

  @ApiOperation({ description: 'Actualizar un chofer' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChoferDto: UpdateChoferDto) {
    return this.choferService.update(+id, updateChoferDto);
  }

  @ApiOperation({ description: 'Eliminar un chofer' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.choferService.remove(+id);
  }
}
