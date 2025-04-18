import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepositoService } from './deposito.service';
import { CreateDepositoDto } from './dto/create-deposito.dto';
import { UpdateDepositoDto } from './dto/update-deposito.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Deposito')
@Controller('deposito')
export class DepositoController {
  constructor(private readonly depositoService: DepositoService) {}

  @ApiOperation({ description: 'crear un deposito' })
  @Post()
  create(@Body() createDepositoDto: CreateDepositoDto) {
    return this.depositoService.create(createDepositoDto);
  }

  @ApiOperation({ description: 'Obtener todos los depositos' })
  @Get()
  findAll() {
    return this.depositoService.findAll();
  }

  @ApiOperation({ description: 'Obtener depositos por ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depositoService.findOne(+id);
  }

  @ApiOperation({ description: 'Actualizar un deposito' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepositoDto: UpdateDepositoDto,
  ) {
    return this.depositoService.update(+id, updateDepositoDto);
  }

  @ApiOperation({ description: 'Eliminar un deposito' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depositoService.remove(+id);
  }
}
