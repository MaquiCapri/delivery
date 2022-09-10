import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaComponent } from './vista/vista.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavComponent } from './componentes/nav/nav.component';
import { SectionComponent } from './componentes/section/section.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MenuComponent } from './componentes/header/menu/menu.component';
import { UbicacionComponent } from './componentes/nav/ubicacion/ubicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
    HeaderComponent,
    NavComponent,
    SectionComponent,
    FooterComponent,
    MenuComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
