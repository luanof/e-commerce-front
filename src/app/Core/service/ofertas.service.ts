import { Injectable } from '@angular/core';
import { Ofertas } from '../../Shared/Models/ofertas.model';
import { Aula2apiService } from './Http/aula2api.service';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  constructor(private aula2apiService: Aula2apiService) { }

  public async getofertas(): Promise<Ofertas[]> {
    let resouce = await this.aula2apiService.get<Ofertas[]>();

    return resouce;
  };
}
