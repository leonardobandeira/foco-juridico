import { PrismaService } from 'src/db/prisma.service';
import Painel from './painel.entity';
import { Indicador } from '@prisma/client';
export declare class PainelRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    obterTodos(): Promise<{
        id: number;
        nome: string;
        descricao: string;
        endereco: string;
        grupoId: number;
    }[]>;
    obterIndicadores(painelId: number): Promise<Indicador[]>;
    obterPorId(id: number): Promise<{
        id: number;
        nome: string;
        descricao: string;
        endereco: string;
        grupoId: number;
    }>;
    criar(painel: Painel): Promise<{
        id: number;
        nome: string;
        descricao: string;
        endereco: string;
        grupoId: number;
    }>;
    atualizar(painel: Painel): Promise<{
        id: number;
        nome: string;
        descricao: string;
        endereco: string;
        grupoId: number;
    }>;
    deletar(id: number): Promise<{
        id: number;
        nome: string;
        descricao: string;
        endereco: string;
        grupoId: number;
    }>;
}
