import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/components/home/home.component'
import { VerDatosComponent } from './components/ver-datos/ver-datos.component';
import { VercomparacionComponent } from './components/vercomparacion/vercomparacion.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'verMovil',component:VerDatosComponent},
  {path:'verComparacion', component:VercomparacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
