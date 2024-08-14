export type Auth = '' | 'login' | 'registrar' | 'solicitar';
export type Tema = 'dark' | '';

export type Painel = {
    id: number;
    nome: string;
    endereco: string;
    grupoId: number;
    indicadores: Indicador[];
};

export type Indicador = {
    id: number;
    nome: string;
};