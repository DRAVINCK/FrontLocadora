import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Caminhao } from 'src/app/Caminhao';
import { CaminhaoService } from 'src/app/caminhao.service';

@Component({
  selector: 'app-caminhao',
  templateUrl: './caminhao.component.html',
  styleUrls: ['./caminhao.component.css']
})
export class CaminhaoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  constructor(private caminhaoService : CaminhaoService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Novo Caminhao';
    this.formulario = new FormGroup({
      placa: new FormControl(null),
      CapacidadeCarga: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const caminhao : Caminhao = this.formulario.value;
    this.caminhaoService.cadastrar(caminhao).subscribe(result => {
      alert('Caminhao inserido com sucesso.');
    })
  } 
}


