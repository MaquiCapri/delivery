import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ComprarComponent } from './componentes/comprar/comprar.component';
import { BebidasComponent } from './componentes/footer/bebidas/bebidas.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HamburguesasComponent } from './componentes/footer/hamburguesas/hamburguesas.component';
import { LomitosComponent } from './componentes/footer/lomitos/lomitos.component';
import { PizzasComponent } from './componentes/footer/pizzas/pizzas.component';
import { FormaspagosComponent } from './componentes/formaspagos/formaspagos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  { path: '',component: VistaComponent},
  { path: 'footer',component: FooterComponent},
  { path: 'pizzas',component: PizzasComponent},
  { path: 'hamburguesas',component: HamburguesasComponent},
  { path: 'lomitos',component: LomitosComponent},
  { path: 'bebidas',component:BebidasComponent},
  { path: 'formaspagos',component:FormaspagosComponent},
  { path: 'carrito',component:CarritoComponent},
  { path: 'nosotros',component:NosotrosComponent},
  { path: 'comprar',component:ComprarComponent},
  { path: 'tarjetas',component:TarjetasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
