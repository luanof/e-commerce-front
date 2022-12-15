import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../Core/service/ofertas.service';
import { Ofertas } from '../Shared/Models/ofertas.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss']
})
export class DiversaoComponent implements OnInit {
  public ofertas!: Ofertas[];

  constructor(private ofertasService: OfertasService) { }

  async ngOnInit() {
    await this.ofertasService.getofertasporDiversao().then((oferta: Ofertas[]) => this.ofertas = oferta)
  }






}
