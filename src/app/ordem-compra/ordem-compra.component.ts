import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../Core/service/ordem-compra.service';
import { NgForm } from '@angular/forms';
import { Pedido } from '../Shared/Models/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  @ViewChild('formulario') formulario!: NgForm;
  constructor(private ordemCompraService: OrdemCompraService) {}
  id: any;
  ngOnInit() {}

  comfirmarCompra(): void {
    console.log(this.formulario.value);

    this.ordemCompraService
      .efetuandoPedido(this.formulario.value as Pedido)
      .subscribe((date) => (this.id = date.id));
  }
}
