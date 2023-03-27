import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiversaoComponent } from "./diversao/diversao.component";
import { HomeComponent } from "./home/home.component";
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { RestauranteComponent } from "./restaurante/restaurante.component";


const routes: Routes = [
  { path: 'Diversao', component: DiversaoComponent },
  { path: '', component: HomeComponent },
  { path: 'Restaurante', component: RestauranteComponent },
  {
    path: 'oferta/:id',
    component: OfertaComponent,
    children: [
      { path: '', pathMatch: 'prefix', redirectTo: 'como-usar' },
      { path: 'como-usar', component: ComoUsarComponent },
      { path: 'onde-fica', component: OndeFicaComponent }
    ]
  },
  { path: 'ordemCompra', component: OrdemCompraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
