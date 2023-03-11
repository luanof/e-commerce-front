import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map, Observable } from 'rxjs';
import { Ofertas } from 'src/app/Shared/Models/ofertas.model';

@Injectable({
  providedIn: 'root'
})
export class Aula2apiService {

  constructor(private Http: HttpClient) { }
  public url_api: string = 'http://localhost:3000';
  public async get<TData>(url: string): Promise<TData> {

    return lastValueFrom(await this.Http.get<TData>(url));
  }
  public pesquisa(data: string): Observable<Ofertas[]> {
    let pesquisa = this.Http.get<Ofertas[]>(`${this.url_api}/ofertas?descricao_oferta_like=${data}`);
    return pesquisa;
  }

}
