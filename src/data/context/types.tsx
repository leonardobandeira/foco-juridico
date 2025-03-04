export type Auth = '' | 'login' | 'registrar' | 'solicitar';
export type Tema = 'dark' | '';

export interface ItemOption {
  nome: string;
  id: number;
}

export interface Alerta {
  usuarioId: number
  nome: string
  frequencia: number // quantidade de dias
  indicadorId: number
  tipoMetaId: number // <, >, =, <= ...
  valor: number // valor numerico
}

export interface Painel {
  id: number;
  nome: string;
  descricao: string;
  endereco: string;
  indicadores: Indicador[];
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