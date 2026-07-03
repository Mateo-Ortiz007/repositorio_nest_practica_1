export declare class EstudiantesService {
    private estudiantes;
    findAll(): {
        id: number;
        nombre: string;
        curso: string;
    }[];
    findOne(id: number): {
        id: number;
        nombre: string;
        curso: string;
    } | undefined;
}
