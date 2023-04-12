export interface ComoUsarResult {
  id: string;
  descricao: string;
}

export interface ondeFicaResult {
  id: string;
  descricao: string;
}

export interface itemsCarrinho {
  id: number;
  categoria: string;
  titulo: string;
  descricao_oferta: string;
  anunciante: string;
  valor: number;
  destaque: boolean;
  imagens: Array<imgoferta>;
  quantidade: number;
}
interface imgoferta {
  url: string;
}
