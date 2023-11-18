import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrosService } from './carros.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';
import { CarrosComponent } from'./components/carros/carros.component';
import { AluguelComponent } from './components/aluguel/aluguel.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AluguelService } from './aluguel.service';
import { ClienteService } from './cliente.service';
import { VeiculoService } from './veiculo.service';
import { VeiculosComponent } from './components/veiculos/veiculos.component';
import { AviaoComponent } from './components/aviao/aviao.component';
import { BarcoComponent } from './components/barco/barco.component';
import { CaminhaoComponent } from './components/caminhao/caminhao.component';
import { OnibusComponent } from './components/onibus/onibus.component';
import { VanComponent } from './components/van/van.component';
import { AviaoService } from './aviao.service';
import { BarcoService } from './barco.service';
import { CaminhaoService } from './caminhao.service';
import { CarrocaService } from './carroca.service';
import { OnibusService } from './onibus.service';
import { VanService } from './van.service';
import { CarrocaComponent } from './components/carroca/carroca.component';

@NgModule({
  declarations: [
    AppComponent,
    AluguelComponent,
    AviaoComponent,
    BarcoComponent,
    CaminhaoComponent,
    CarrosComponent,
    CarrocaComponent,
    ClienteComponent,
    OnibusComponent,
    VanComponent,
    VeiculosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    
  ],
  providers: [
    HttpClientModule, 
    AluguelService,
    AviaoService,
    BarcoService,
    CaminhaoService,
    CarrocaService,
    CarrosService,
    VeiculoService, 
    ClienteService,
    OnibusService,
    VanService],

  bootstrap: [AppComponent]
})
export class AppModule { }
