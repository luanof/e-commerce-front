import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../Core/service/ordem-compra.service';
import { Pedido } from '../Shared/Models/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public Endereco: string = '';
  public Numero: number = 0;
  public Complemento: string = '';
  public formaPagamento: string = '';

  public enderecoPrimitivo: boolean = true;
  public numeroPrimitivo: boolean = true;
  public complementoPrimitivo: boolean = true;
  public formaPagamentoPrimitivo: boolean = true;

  public idPedidoCompra!: number;
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void { }


  atualizaEndereco(Endereco: string) {
    this.Endereco = Endereco;
    this.enderecoPrimitivo = false;
  }
  atualizaNumero(Numero: string) {
    this.Numero = Number(Numero);
    this.numeroPrimitivo = false;
  }
  atualizaComplemento(Complemento: string) {
    this.Complemento = Complemento;
    this.complementoPrimitivo = false;

  }
  atualizaFormaPagamento(formaPagamento: string) {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoPrimitivo = false;
  }


  ferification(): boolean {
    return this.Endereco == '' ||
      this.Numero == 0 ||
      this.Complemento == '' ||
      this.formaPagamento == '';
  }


  comfirmarCompra() {
    const predido: Pedido = {
      Endereco: this.Endereco,
      Numero: this.Numero,
      Complemento: this.Complemento,
      formaPagamento: this.formaPagamento,
    }
    this.ordemCompraService.efetuandoPedido(predido).subscribe((date) => this.idPedidoCompra = date.id as number);

  }
}
