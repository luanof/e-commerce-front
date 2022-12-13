import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../Core/service/ofertas.service';
import { Ofertas } from '../Shared/Models/ofertas.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas!: Ofertas[];

  constructor(
    private ofertasService: OfertasService
  ) { }
  ngOnInit() {
    this.ofertasService.getofertas()
      .then((ofertas: Ofertas[]) => this.ofertas = ofertas)
      .catch((props: any) => console.log(props));
  }


}
