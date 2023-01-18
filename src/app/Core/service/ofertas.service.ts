import { Injectable } from '@angular/core';
import { Ofertas } from '../../Shared/Models/ofertas.model';
import { ComoUsarResult, ondeFicaResult } from '../Interfaces/interfaces';
import { Aula2apiService } from './Http/aula2api.service';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  constructor(private aula2apiService: Aula2apiService) { }
  public url_api: string = 'http://localhost:3000';
  public async getofertas(): Promise<Ofertas[]> {
    let resouce = await this.aula2apiService.get<Ofertas[]>(`${this.url_api}/ofertas?destaque=true`);

    return resouce;
  };
  public async getofertasId(id: number): Promise<Ofertas> {
    let resouce = await this.aula2apiService.get<Ofertas>(`${this.url_api}/ofertas/${id}`);

    return resouce;
  };
  public async getofertasporCategoria(): Promise<Ofertas[]> {
    let resouce = await this.aula2apiService.get<Ofertas[]>(`${this.url_api}/ofertas?categoria=restaurante`);

    return resouce;
  };
  public async getofertasporDiversao(): Promise<Ofertas[]> {
    let resouce = await this.aula2apiService.get<Ofertas[]>(`${this.url_api}/ofertas?categoria=diversao`);

    return resouce;
  };

  public getComoUsarOfertasPorId(id: number): Promise<ComoUsarResult> {
    let resouce = this.aula2apiService.get<ComoUsarResult>(`${this.url_api}/como-usar/${id}`);

    return resouce;
  }

  public getOndeFicaPorId(id: number): Promise<ondeFicaResult> {
    let resouce = this.aula2apiService.get<ondeFicaResult>(`${this.url_api}/onde-fica/${id}`);

    return resouce ;
  }
}

