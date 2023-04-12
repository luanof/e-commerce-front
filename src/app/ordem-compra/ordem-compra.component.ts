import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../Core/service/ordem-compra.service';
import { NgForm } from '@angular/forms';
import { Pedido } from '../Shared/Models/pedido.model';
import ItemPedidos from '../Shared/Models/item-pedidos.model';
import { Ofertas } from '../Shared/Models/ofertas.model';
import { itemsCarrinho } from '../Core/Interfaces/interfaces';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  @ViewChild('formulario') formulario!: NgForm;
  id: any;
  items: itemsCarrinho[] = [];
  cout: number = 0;
  verificationProduct: boolean = false;
  constructor(
    private ordemCompraService: OrdemCompraService,
    private itemPedidos: ItemPedidos
  ) {}

  ngOnInit() {
    this.items = this.itemPedidos.getitems();
    this.cout = this.itemPedidos.getCout();
    if (this.items.length > 0) this.verificationProduct = true;
  }

  somarCout(id: number) {
    const item: any = this.items.find((x) => x.id === id);
    item.quantidade += 1;
    this.cout += item.valor;
  }
  diminuitCout(id: number) {
    const item: any = this.items.find((x) => x.id === id);
    item.quantidade -= 1;
    this.cout -= item.valor;
    if (item.quantidade == 0) {
      this.cout - item.valor;
      this.itemPedidos.setCout(this.cout);
      let index = this.items.findIndex((x) => x.id == id);
      this.items.splice(index, 1);
      this.verificationProduct = false;
    }
  }

  comfirmarCompra(): void {
    if (this.items.length > 0) {
      this.ordemCompraService
        .efetuandoPedido({
          ...(this.formulario.value as Pedido),
          Produtos: this.items as itemsCarrinho[],
        })
        .subscribe((date) => (this.id = date.id));

      this.itemPedidos.reset();
    }
  }
}
