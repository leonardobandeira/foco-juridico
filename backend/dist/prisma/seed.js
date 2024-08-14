"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.grupo.createMany({
        data: [
            { nome: 'Administrador' },
        ],
    });
    await prisma.tipoUsuario.createMany({
        data: [
            { nome: 'Administrador' },
            { nome: 'Simples' },
        ],
    });
    await prisma.tipoIndicador.createMany({
        data: [
            { nome: 'Número' },
            { nome: 'Porcentagem' },
        ],
    });
    await prisma.tipoMeta.createMany({
        data: [
            { nome: 'Menor', simbolo: '<' },
            { nome: 'Menor ou Igual', simbolo: '<=' },
            { nome: 'Igual', simbolo: '=' },
            { nome: 'Maior', simbolo: '>' },
            { nome: 'Maior ou Igual', simbolo: '>=' },
            { nome: 'Diferente', simbolo: '!=' },
        ],
    });
    console.log('Dados iniciais inseridos com sucesso!');
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map