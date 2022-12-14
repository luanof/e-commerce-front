import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Aula2apiService {

  constructor(private Http: HttpClient) { }
  private Geturl(): string {
    return `http://localhost:3000/ofertas`;
  }
  public async get<TData>(url: string): Promise<TData> {

    return lastValueFrom(await this.Http.get<TData>(url));
  }

}
