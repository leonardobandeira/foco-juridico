import { PrismaService } from 'src/db/prisma.service';
import Indicador from './indicador.entity';
export declare class IndicadorRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    obterTodos(): Promise<{
        id: number;
        nome: string;
        tipoIndicadorId: number;
        painelId: number;
    }[]>;
    obterTipoMeta(): Promise<{
        id: number;
        nome: string;
        simbolo: string;
    }[]>;
    obterPorId(id: number): Promise<{
        id: number;
        nome: string;
        tipoIndicadorId: number;
        painelId: number;
    }>;
    criar(indicador: Indicador): Promise<{
        id: number;
        nome: string;
        tipoIndicadorId: number;
        painelId: number;
    }>;
    atualizar(indicador: Indicador): Promise<{
        id: number;
        nome: string;
        tipoIndicadorId: number;
        painelId: number;
    }>;
    deletar(id: number): Promise<{
        id: number;
        nome: string;
        tipoIndicadorId: number;
        painelId: number;
    }>;
}
