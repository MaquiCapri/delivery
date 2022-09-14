import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaComponent } from './vista/vista.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavComponent } from './componentes/nav/nav.component';
import { SectionComponent } from './componentes/section/section.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PizzasComponent } from './componentes/footer/pizzas/pizzas.component';
import { HamburguesasComponent } from './componentes/footer/hamburguesas/hamburguesas.component';
import { LomitosComponent } from './componentes/footer/lomitos/lomitos.component';
import { BebidasComponent } from './componentes/footer/bebidas/bebidas.component';
import { PromosComponent } from './componentes/footer/promos/promos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { FormaspagosComponent } from './componentes/formaspagos/formaspagos.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ComprarComponent } from './componentes/comprar/comprar.component';
import { TarjetasComponent } from './componentes/comprar/tarjetas/tarjetas.component';
import { ConfirmarComponent } from './componentes/comprar/confirmar/confirmar.component';
import { EfectivoComponent } from './componentes/comprar/efectivo/efectivo.component';



@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
    HeaderComponent,
    NavComponent,
    SectionComponent,
    FooterComponent,
    PizzasComponent,
    HamburguesasComponent,
    LomitosComponent,
    BebidasComponent,
    PromosComponent,
    NosotrosComponent,
    FormaspagosComponent,
    CarritoComponent,
    ComprarComponent,
    TarjetasComponent,
    ConfirmarComponent,
    EfectivoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
