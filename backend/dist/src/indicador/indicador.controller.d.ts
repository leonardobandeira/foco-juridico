import Indicador from './indicador.entity';
import { IndicadorRepository } from './indicador.repository';
export declare class IndicadorController {
    private repo;
    constructor(repo: IndicadorRepository);
    criar(indicador: Indicador): Promise<{
        id: number;
        nome: string;
        tipoIndicadorId: number;
        painelId: number;
    }>;
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
    atualizar(id: string, indicador: Indicador): Promise<{
        id: number;
        nome: string;
        tipoIndicadorId: number;
        painelId: number;
    }>;
    obterPorId(id: string): Promise<{
        id: number;
        nome: string;
        tipoIndicadorId: number;
        painelId: number;
    }>;
    deletar(id: string): Promise<void>;
}
