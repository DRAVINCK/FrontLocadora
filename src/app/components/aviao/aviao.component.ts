import { Component, OnInit } from '@angular/core';
import { Aviao } from './../../Aviao';
import { AviaoService } from './../../aviao.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aviao',
  templateUrl: './aviao.component.html',
  styleUrls: ['./aviao.component.css']
})
export class AviaoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = "";
  constructor(private aviaoService : AviaoService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Novo Aviao';
    this.formulario = new FormGroup({
      placa: new FormControl(null),
      CapacidadeDePessoas: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const aviao : Aviao = this.formulario.value;
    this.aviaoService.cadastrar(aviao).subscribe(result => {
      alert('Avião inserido com sucesso.');
    })
  } 
}





