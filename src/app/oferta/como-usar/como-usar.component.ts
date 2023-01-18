import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComoUsarResult } from 'src/app/Core/Interfaces/interfaces';
import { OfertasService } from 'src/app/Core/service/ofertas.service';
@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss']
})


export class ComoUsarComponent implements OnInit {
  public comoUsar!: ComoUsarResult;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }
  ngOnInit() {
    let id: number = this.route.parent?.snapshot.params['id'];

    this.ofertasService.getComoUsarOfertasPorId(id).then((result) => this.comoUsar = result);
  }

}


