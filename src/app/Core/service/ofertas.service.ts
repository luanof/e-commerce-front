import { Injectable } from '@angular/core';
import { Ofertas } from '../../Shared/Models/ofertas.model';
import { Aula2apiService } from './Http/aula2api.service';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  constructor(private aula2apiService: Aula2apiService) { }
  public url_api: string = 'http://localhost:3000/ofertas';
  public async getofertas(): Promise<Ofertas[]> {
    let resouce = await this.aula2apiService.get<Ofertas[]>(`${this.url_api}?destaque=true`);

    return resouce;
  };
  public async getofertasId(id: number): Promise<Ofertas> {
    let resouce = await this.aula2apiService.get<Ofertas>(`${this.url_api}/${id}`);

    return resouce;
  };
  public async getofertasporCategoria(): Promise<Ofertas[]> {
    let resouce = await this.aula2apiService.get<Ofertas[]>(`${this.url_api}?categoria=restaurante`);

    return resouce;
  };
  public async getofertasporDiversao(): Promise<Ofertas[]> {
    let resouce = await this.aula2apiService.get<Ofertas[]>(`${this.url_api}?categoria=diversao`);

    return resouce;
  };
}

