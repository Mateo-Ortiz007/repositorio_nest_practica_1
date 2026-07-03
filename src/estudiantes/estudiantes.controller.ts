import { Controller, Get, Param } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiante')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Get()
  findAll() {
    return this.estudiantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudiantesService.findOne(+id);
  }
}
