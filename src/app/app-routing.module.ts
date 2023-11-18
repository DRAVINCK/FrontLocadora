import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosComponent } from'./components/carros/carros.component'
import { AluguelComponent } from './components/aluguel/aluguel.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';
import { AviaoComponent } from './components/aviao/aviao.component';
import { BarcoComponent } from './components/barco/barco.component';
import { CaminhaoComponent } from './components/caminhao/caminhao.component';
import { CarrocaComponent } from './components/carroca/carroca.component';
import { OnibusComponent } from './components/onibus/onibus.component';
import { VanComponent } from './components/van/van.component';

const routes: Routes = [
  {path: 'aluguel', component:AluguelComponent},
  {path: 'aviao', component: AviaoComponent},
  {path: 'barco', component: BarcoComponent},
  {path: 'caminhao', component: CaminhaoComponent},
  {path: 'carroca', component: CarrocaComponent},
  {path: 'carros', component:CarrosComponent},
  {path: 'cliente', component:ClienteComponent},
  {path: 'onibus', component: OnibusComponent},
  {path: 'van', component: VanComponent},
  {path: 'veiculos', component:VeiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
