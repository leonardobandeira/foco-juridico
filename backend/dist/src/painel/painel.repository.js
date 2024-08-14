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
exports.PainelRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db/prisma.service");
let PainelRepository = class PainelRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async obterTodos() {
        return this.prismaService.painel.findMany();
    }
    async obterIndicadores(painelId) {
        const indicadores = await this.prismaService.indicador.findMany({
            where: {
                painelId: painelId
            }
        });
        return indicadores;
    }
    async obterPorId(id) {
        return this.prismaService.painel.findUnique({
            where: {
                id,
            },
        });
    }
    async criar(painel) {
        return this.prismaService.painel.create({
            data: painel,
        });
    }
    async atualizar(painel) {
        if (!painel.id)
            throw new Error('Painel sem ID');
        return this.prismaService.painel.update({
            where: {
                id: painel.id,
            },
            data: painel,
        });
    }
    async deletar(id) {
        return this.prismaService.painel.delete({
            where: {
                id,
            },
        });
    }
};
exports.PainelRepository = PainelRepository;
exports.PainelRepository = PainelRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PainelRepository);
//# sourceMappingURL=painel.repository.js.map