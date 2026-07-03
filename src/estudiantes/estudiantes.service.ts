import { Injectable } from '@nestjs/common';

@Injectable()
export class EstudiantesService {
  private estudiantes = [
    { id: 1, nombre: 'Mateo', curso: 'NestJS' },
    { id: 2, nombre: 'Ana', curso: 'Angular' },
    { id: 3, nombre: 'Carlos', curso: 'React' },
  ];

  findAll() {
    return this.estudiantes;
  }

  findOne(id: number) {
    return this.estudiantes.find((e) => e.id === id);
  }
}
