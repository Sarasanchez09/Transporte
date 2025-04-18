import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Empresa')
@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @ApiOperation({ summary: 'Crea una Empresa' })
  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }

  @ApiOperation({ summary: 'Obtener todas las empresas' })
  @Get()
  findAll() {
    return this.empresaService.findAll();
  }

  @ApiOperation({ summary: 'Obtener una empresas por ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(+id);
  }

  @ApiOperation({ summary: 'Actualizar una empresa' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(+id, updateEmpresaDto);
  }

  @ApiOperation({ summary: 'Eliminar una empresa' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresaService.remove(+id);
  }
}
