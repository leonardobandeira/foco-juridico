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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PainelController = void 0;
const common_1 = require("@nestjs/common");
const painel_repository_1 = require("./painel.repository");
let PainelController = class PainelController {
    constructor(repo) {
        this.repo = repo;
    }
    async criar(painel) {
        const novoPainel = await this.repo.criar(painel);
        return novoPainel;
    }
    async obterTodos() {
        const painel = await this.repo.obterTodos();
        return painel;
    }
    async obterIndicadores(id) {
        const painelId = parseInt(id, 10);
        if (isNaN(painelId)) {
            throw new common_1.BadRequestException('ID inválido');
        }
        const indicadores = await this.repo.obterIndicadores(painelId);
        return indicadores;
    }
    async atualizar(id, painel) {
        const painelAtualizado = await this.repo.atualizar({
            ...painel,
            id: +id,
        });
        return painelAtualizado;
    }
    async obterPorId(id) {
        const painel = await this.repo.obterPorId(+id);
        return painel;
    }
    async deletar(id) {
        await this.repo.deletar(+id);
    }
};
exports.PainelController = PainelController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PainelController.prototype, "criar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PainelController.prototype, "obterTodos", null);
__decorate([
    (0, common_1.Get)(':id/indicadores'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PainelController.prototype, "obterIndicadores", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PainelController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PainelController.prototype, "obterPorId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PainelController.prototype, "deletar", null);
exports.PainelController = PainelController = __decorate([
    (0, common_1.Controller)('painel'),
    __metadata("design:paramtypes", [painel_repository_1.PainelRepository])
], PainelController);
//# sourceMappingURL=painel.controller.js.map