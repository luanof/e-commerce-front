import { itemsCarrinho } from 'src/app/Core/Interfaces/interfaces';

export interface Pedido {
  id?: number;
  Produtos: itemsCarrinho[];
  Endereco: string;
  Numero: number;
  Complemento: string;
  formaPagamento: string;
}
