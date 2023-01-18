import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/Core/service/ofertas.service';
import { ActivatedRoute } from '@angular/router';
import { ondeFicaResult } from 'src/app/Core/Interfaces/interfaces';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss']
})
export class OndeFicaComponent implements OnInit {

  ondeFica!: ondeFicaResult;
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
    let id: number = this.route.parent?.snapshot.params['id'];
    this.ofertasService.getOndeFicaPorId(id).then((result) => this.ondeFica = result);
  }



}
