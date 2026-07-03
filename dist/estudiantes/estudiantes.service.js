"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudiantesService = void 0;
const common_1 = require("@nestjs/common");
let EstudiantesService = class EstudiantesService {
    estudiantes = [
        { id: 1, nombre: 'Mateo', curso: 'NestJS' },
        { id: 2, nombre: 'Ana', curso: 'Angular' },
        { id: 3, nombre: 'Carlos', curso: 'React' },
    ];
    findAll() {
        return this.estudiantes;
    }
    findOne(id) {
        return this.estudiantes.find((e) => e.id === id);
    }
};
exports.EstudiantesService = EstudiantesService;
exports.EstudiantesService = EstudiantesService = __decorate([
    (0, common_1.Injectable)()
], EstudiantesService);
//# sourceMappingURL=estudiantes.service.js.map