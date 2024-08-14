"use client";

import PainelTable from "@/components/gerenciar-paineis/PainelTable";
import { Painel } from "@/data/context/types";

export default function gerenciarPaineis() {
  const paineis: Painel[] = [
    {
      id: 1,
      nome: 'Painel 1',
      endereco: 'Endereço 1',
      grupoId: 1,
      indicadores: [
        { id: 1, nome: 'Indicador 1' },
      ],
    },
    {
      id: 2,
      nome: 'Painel 2',
      endereco: 'Endereço 2',
      grupoId: 2,
      indicadores: [
        { id: 2, nome: 'Indicador 2' },
      ],
    },
  ];

  return <PainelTable paineis={paineis} />;
};