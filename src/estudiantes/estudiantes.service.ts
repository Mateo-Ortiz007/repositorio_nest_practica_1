import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudiantesService {
  private estudiantes: Estudiante[] = [];
  private idCounter = 1;

  create(createEstudianteDto: CreateEstudianteDto): Estudiante {
    const estudiante = new Estudiante(
      this.idCounter++,
      createEstudianteDto.nombre,
      createEstudianteDto.apellido,
      createEstudianteDto.email,
      createEstudianteDto.curso,
    );
    this.estudiantes.push(estudiante);
    return estudiante;
  }

  findAll(): Estudiante[] {
    return this.estudiantes;
  }

  findOne(id: number): Estudiante {
    const estudiante = this.estudiantes.find((e) => e.id === id);
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con id ${id} no encontrado`);
    }
    return estudiante;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto): Estudiante {
    const index = this.estudiantes.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new NotFoundException(`Estudiante con id ${id} no encontrado`);
    }
    const estudiante = this.estudiantes[index];
    Object.assign(estudiante, updateEstudianteDto);
    return estudiante;
  }

}
