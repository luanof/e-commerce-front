import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../Core/service/ofertas.service';
import { Ofertas } from '../Shared/Models/ofertas.model';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss']
})
export class RestauranteComponent implements OnInit {
  public ofertas!: Ofertas[];
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getofertasporCategoria()
      .then((ofertas: Ofertas[]) => this.ofertas = ofertas)
      .catch((props: any) => console.log(props));
  }
}


