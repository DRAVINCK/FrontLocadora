import { Component } from '@angular/core';
import { BarcoService } from './../../barco.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Barco } from 'src/app/Barco';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrls: ['./barco.component.css']
})
export class BarcoComponent {
  formulario: any;
  tituloFormulario: string = '';
  constructor(private BarcoService : BarcoService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Novo Barco';
    this.formulario = new FormGroup({
      placa: new FormControl(null),
      Motores: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const barco : Barco = this.formulario.value;
    this.BarcoService.cadastrar(barco).subscribe(result => {
      alert('Barco inserido com sucesso.');
    })
  } 
}
