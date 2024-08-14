import Painel from './painel.entity';
import { PainelRepository } from './painel.repository';
export declare class PainelController {
    private repo;
    constructor(repo: PainelRepository);
    criar(painel: Painel): Promise<{
        id: number;
        nome: string;
        descricao: string;
        endereco: string;
        grupoId: number;
    }>;
    obterTodos(): Promise<{
        id: number;
        nome: string;
        descricao: string;
        endereco: string;
        grupoId: number;
    }[]>;
    obterIndicadores(id: string): Promise<{
        id: number;
        nome: string;
        tipoIndicadorId: number;
        painelId: number;
    }[]>;
    atualizar(id: string, painel: Painel): Promise<{
        id: number;
        nome: string;
        descricao: string;
        endereco: string;
        grupoId: number;
    }>;
    obterPorId(id: string): Promise<{
        id: number;
        nome: string;
        descricao: string;
        endereco: string;
        grupoId: number;
    }>;
    deletar(id: string): Promise<void>;
}
