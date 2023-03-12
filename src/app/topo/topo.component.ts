import { Component, OnInit } from '@angular/core';
import { Observable, Subject, switchMap, debounceTime, distinctUntilChanged } from 'rxjs';
import { Aula2apiService } from '../Core/service/Http/aula2api.service';
import { Ofertas } from '../Shared/Models/ofertas.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  $ofertas!: Observable<Ofertas[]>;
  sujectOferta: Subject<string> = new Subject<string>();

  constructor(private aula2apiService: Aula2apiService) { }



  ngOnInit() {
    this.$ofertas = this.sujectOferta.pipe(distinctUntilChanged(), debounceTime(1000), switchMap((termo: string) => {

      return this.aula2apiService.pesquisa(termo);
    }));

  }
  pesquisa(event: string): void {

    this.sujectOferta.next(event.trim());
  }


}
