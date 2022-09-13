import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidasComponent } from './componentes/footer/bebidas/bebidas.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HamburguesasComponent } from './componentes/footer/hamburguesas/hamburguesas.component';
import { LomitosComponent } from './componentes/footer/lomitos/lomitos.component';
import { PizzasComponent } from './componentes/footer/pizzas/pizzas.component';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  { path: '',component: VistaComponent},
  { path: 'footer',component: FooterComponent},
  { path: 'pizzas',component: PizzasComponent},
  { path: 'hamburguesas',component: HamburguesasComponent},
  { path: 'lomitos',component: LomitosComponent},
  { path: 'bebidas',component:BebidasComponent}
 


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
