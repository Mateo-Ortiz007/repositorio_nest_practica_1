export class Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  curso: string;

  constructor(id: number, nombre: string, apellido: string, email: string, curso: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.curso = curso;
  }
}
