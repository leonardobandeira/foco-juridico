export type Auth = '' | 'login' | 'registrar' | 'solicitar';
export type Tema = 'dark' | '';

export interface Painel {
  id: number;
  nome: string;
  descricao: string;
  endereco: string;
  /* grupoId: number;
  grupo: {
    id: number;
    nome: string;
  };
  indicadores: {
    id: number;
    nome: string;
    tipoIndicadorId: number;
  }[]; */
}

export type Indicador = {
    id: number;
    nome: string;
};

export type TipoMeta = {
    id: number;
    nome: string;
    simbolo: string; 
};