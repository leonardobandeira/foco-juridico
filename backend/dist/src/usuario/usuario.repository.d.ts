import { PrismaService } from 'src/db/prisma.service';
import Usuario from './usuario.entity';
export declare class UsuarioRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    obterTodos(): Promise<{
        id: number;
        nome: string;
        email: string;
        telefone: string;
        cargo: string;
        descricao: string;
        status: boolean;
        grupoId: number;
        tipoUsuarioId: number;
    }[]>;
    obterPorId(id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        telefone: string;
        cargo: string;
        descricao: string;
        status: boolean;
        grupoId: number;
        tipoUsuarioId: number;
    }>;
    criar(usuario: Usuario): Promise<{
        id: number;
        nome: string;
        email: string;
        telefone: string;
        cargo: string;
        descricao: string;
        status: boolean;
        grupoId: number;
        tipoUsuarioId: number;
    }>;
    atualizar(usuario: Usuario): Promise<{
        id: number;
        nome: string;
        email: string;
        telefone: string;
        cargo: string;
        descricao: string;
        status: boolean;
        grupoId: number;
        tipoUsuarioId: number;
    }>;
    deletar(id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        telefone: string;
        cargo: string;
        descricao: string;
        status: boolean;
        grupoId: number;
        tipoUsuarioId: number;
    }>;
}
