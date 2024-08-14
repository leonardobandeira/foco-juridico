"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db/prisma.service");
let UsuarioRepository = class UsuarioRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async obterTodos() {
        return this.prismaService.usuario.findMany();
    }
    async obterPorId(id) {
        return this.prismaService.usuario.findUnique({
            where: {
                id,
            },
        });
    }
    async criar(usuario) {
        return this.prismaService.usuario.create({
            data: usuario,
        });
    }
    async atualizar(usuario) {
        if (!usuario.id)
            throw new Error('Usuário sem ID');
        return this.prismaService.usuario.update({
            where: {
                id: usuario.id,
            },
            data: usuario,
        });
    }
    async deletar(id) {
        return this.prismaService.usuario.delete({
            where: {
                id,
            },
        });
    }
};
exports.UsuarioRepository = UsuarioRepository;
exports.UsuarioRepository = UsuarioRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuarioRepository);
//# sourceMappingURL=usuario.repository.js.map