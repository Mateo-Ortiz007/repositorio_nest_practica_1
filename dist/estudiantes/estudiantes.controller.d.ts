import { EstudiantesService } from './estudiantes.service';
export declare class EstudiantesController {
    private readonly estudiantesService;
    constructor(estudiantesService: EstudiantesService);
    findAll(): {
        id: number;
        nombre: string;
        curso: string;
    }[];
    findOne(id: string): {
        id: number;
        nombre: string;
        curso: string;
    } | undefined;
}
