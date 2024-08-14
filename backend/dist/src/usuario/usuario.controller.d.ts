import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
export declare class UsuarioController {
    private repo;
    constructor(repo: UsuarioRepository);
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
    atualizar(id: string, usuario: Usuario): Promise<{
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
    obterPorId(id: string): Promise<{
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
    deletar(id: string): Promise<void>;
}
