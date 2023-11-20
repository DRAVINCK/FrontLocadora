import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AluguelService } from './../../aluguel.service';
import { Aluguel } from 'src/app/Aluguel';
import { Cliente } from './../../Cliente';
import { Veiculo } from './../../Veiculo';
import { ClienteService } from 'src/app/cliente.service';
import { VeiculoService } from 'src/app/veiculo.service';

@Component({
  selector: 'app-aluguel',
  templateUrl: './aluguel.component.html',
  styleUrls: ['./aluguel.component.css']
})
export class AluguelComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  alugueis: Aluguel[] = [];
  constructor(private aluguelService : AluguelService,
              private clientesService : ClienteService,
              private veiculoService : VeiculoService
              ){}
  ngOnInit(): void {
      this.tituloFormulario = 'Novo Aluguel';
      this.formulario = new FormGroup({
        id: new FormControl(null),
        cliente: new FormControl(null),
        clienteCpf: new FormControl(null),
        veiculo: new FormControl(null),
        veiculoPlaca: new FormControl(null)
      })
      this.listarAlugueis();
  }
  listarAlugueis(): void {
    this.aluguelService.listar().subscribe(alugueis => {
      this.alugueis = alugueis;
    });
  }
  enviarFormulario(): void{
    const aluguel : Aluguel = this.formulario.value;
    if (aluguel.id) {
      this.aluguelService.atualizar(aluguel).subscribe(result => {
        alert('Aluguel atualizado');
        this.listarAlugueis();
      });
    } else {
      this.aluguelService.cadastrar(aluguel).subscribe(result => {
        alert('Aluguel cadastrado');
        this.listarAlugueis();
      });
    }
  }
  editarAluguel(aluguel: Aluguel): void {
    this.formulario.patchValue(aluguel);
  }
  excluirAluguel(id: string): void {
    this.aluguelService.excluir(id).subscribe(result => {
      alert('Aluguel excluído');
      this.listarAlugueis();
    });
  }
}
