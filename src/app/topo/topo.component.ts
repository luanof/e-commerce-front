import { Component } from '@angular/core';
import { Aula2apiService } from '../Core/service/Http/aula2api.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent {
  constructor(private aula2apiService: Aula2apiService) { }

  pesquisa(event: string): void {
    console.log(event);
    let teste = this.aula2apiService.pesquisa(event);
    console.log(teste);
  }
}
