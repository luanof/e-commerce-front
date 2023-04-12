import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/Shared/Models/pedido.model';

@Injectable({
  providedIn: 'root',
})
export class OrdemCompraService {
  public url_api: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  efetuandoPedido(pedido: Pedido): Observable<Pedido> {
    console.log(pedido);
    return this.http.post<Pedido>(`${this.url_api}/pedidos`, pedido);
  }
}
