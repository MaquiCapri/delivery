import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './componentes/footer/footer.component';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  { path: '',component: VistaComponent},
  { path: 'footer',component: FooterComponent},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
