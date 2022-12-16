import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiversaoComponent } from "./diversao/diversao.component";
import { HomeComponent } from "./home/home.component";
import { OfertaComponent } from './oferta/oferta.component';
import { RestauranteComponent } from "./restaurante/restaurante.component";


const routes: Routes = [
  { path: 'Diversao', component: DiversaoComponent },
  { path: '', component: HomeComponent },
  { path: 'Restaurante', component: RestauranteComponent },
  { path: 'oferta/:id', component: OfertaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
