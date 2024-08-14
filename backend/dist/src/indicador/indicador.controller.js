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
exports.IndicadorController = void 0;
const common_1 = require("@nestjs/common");
const indicador_repository_1 = require("./indicador.repository");
let IndicadorController = class IndicadorController {
    constructor(repo) {
        this.repo = repo;
    }
    async criar(indicador) {
        const novoIndicador = await this.repo.criar(indicador);
        return novoIndicador;
    }
    async obterTodos() {
        const indicador = await this.repo.obterTodos();
        return indicador;
    }
    async obterTipoMeta() {
        const tipoMeta = await this.repo.obterTipoMeta();
        return tipoMeta;
    }
    async atualizar(id, indicador) {
        const indicadorAtualizado = await this.repo.atualizar({
            ...indicador,
            id: +id,
        });
        return indicadorAtualizado;
    }
    async obterPorId(id) {
        const indicador = await this.repo.obterPorId(+id);
        return indicador;
    }
    async deletar(id) {
        await this.repo.deletar(+id);
    }
};
exports.IndicadorController = IndicadorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndicadorController.prototype, "criar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IndicadorController.prototype, "obterTodos", null);
__decorate([
    (0, common_1.Get)('/metas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IndicadorController.prototype, "obterTipoMeta", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IndicadorController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IndicadorController.prototype, "obterPorId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IndicadorController.prototype, "deletar", null);
exports.IndicadorController = IndicadorController = __decorate([
    (0, common_1.Controller)('indicador'),
    __metadata("design:paramtypes", [indicador_repository_1.IndicadorRepository])
], IndicadorController);
//# sourceMappingURL=indicador.controller.js.map