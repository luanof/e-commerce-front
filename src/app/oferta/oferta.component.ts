import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../Core/service/ofertas.service';
import { Ofertas } from '../Shared/Models/ofertas.model';
import { ActivatedRoute, Params } from '@angular/router';
import ItemPedidos from '../Shared/Models/item-pedidos.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
})
export class OfertaComponent implements OnInit {
  public oferta!: Ofertas;

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute,
    private itemPedidos: ItemPedidos
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    this.ofertasService
      .getofertasId(id)
      .then((ofertas: Ofertas) => (this.oferta = ofertas));
  }

  addCarrinho() {
    this.itemPedidos.setItems(this.oferta);
  }
}
