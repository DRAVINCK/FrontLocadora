import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Carroca } from 'src/app/Carroca';
import { CarrocaService } from 'src/app/carroca.service';

@Component({
  selector: 'app-carroca',
  templateUrl: './carroca.component.html',
  styleUrls: ['./carroca.component.css']
})
export class CarrocaComponent {
  formulario: any;
  tituloFormulario: string = '';
  constructor(private carrocaService : CarrocaService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Nova Carroca';
    this.formulario = new FormGroup({
      placa: new FormControl(null),
      Cavalos: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const carroca : Carroca = this.formulario.value;
    this.carrocaService.cadastrar(carroca).subscribe(result => {
      alert('Carroca inserida com sucesso.');
    })
  } 
}

