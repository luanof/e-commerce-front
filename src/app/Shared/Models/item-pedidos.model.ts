import { itemsCarrinho } from 'src/app/Core/Interfaces/interfaces';
import { Ofertas } from './ofertas.model';

export default class ItemPedidos {
  private items: itemsCarrinho[] = [];
  private cout: number = 0;

  constructor() {}

  public getitems(): itemsCarrinho[] {
    return this.items;
  }

  public setItems(item: Ofertas): void {
    this.items.push({ ...item, quantidade: 1 });
    this.cout += item.valor;
  }

  public getCout(): number {
    return this.cout;
  }

  public setCout(cout: number): void {
    this.cout = cout;
  }

  public reset() {
    this.items.splice(0, this.items.length);
    this.cout = 0;
  }
}
