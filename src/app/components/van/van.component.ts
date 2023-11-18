import { Component } from '@angular/core';
import { VanService } from './../../van.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Van } from 'src/app/Van';

@Component({
  selector: 'app-van',
  templateUrl: './van.component.html',
  styleUrls: ['./van.component.css']
})
export class VanComponent {
  formulario: any;
  tituloFormulario: string = '';
  constructor(private vanService : VanService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Nova Van';
    this.formulario = new FormGroup({
      placa: new FormControl(null),
      CapacidadeDePessoas: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const van : Van = this.formulario.value;
    this.vanService.cadastrar(van).subscribe(result => {
      alert('Van inserida com sucesso.');
    })
  } 
}
