"use client";

import { useState, useEffect } from "react";
import PainelTable from "@/components/gerenciar-paineis/PainelTable";
import { Painel } from "@/data/context/types";
import { getPaineis } from "@/services/painelService";

export default function GerenciarPaineis() {
  const [paineis, setPaineis] = useState<Painel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPaineis() {
      try {
        const data = await getPaineis();
        setPaineis(data);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar os painéis');
      } finally {
        setLoading(false);
      }
    }

    fetchPaineis();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return <PainelTable paineis={paineis} />;
}
