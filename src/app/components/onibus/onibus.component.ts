import { Component, OnInit } from '@angular/core';
import { Onibus } from './../../Onibus';
import { OnibusService } from 'src/app/onibus.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.css']
})
export class OnibusComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  constructor(private onibusService : OnibusService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Novo Onibus';
    this.formulario = new FormGroup({
      placa: new FormControl(null),
      CapacidadeDePessoas: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const onibus : Onibus = this.formulario.value;
    this.onibusService.cadastrar(onibus).subscribe(result => {
      alert('Onibus inserido com sucesso.');
    })
  } 
}

