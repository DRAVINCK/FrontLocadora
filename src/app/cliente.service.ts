import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl = 'http://localhost:5230/Cliente';
  constructor(private http: HttpClient) {}
  listar(): Observable<Cliente[]> {
    const url = this.apiUrl + `/listar`;
    return this.http.get<Cliente[]>(url);
  }
  buscar(cpf: string): Observable<Cliente> {
    const url = `${this.apiUrl}/buscar/${cpf}`;
    return this.http.get<Cliente>(url);
  }
  cadastrar(cliente: Cliente): Observable<any> {
    const url = this.apiUrl + `/cadastrar`;
    return this.http.post<Cliente>(url, cliente, httpOptions);
  }
  atualizar(cliente: Cliente): Observable<any> {
    const url = this.apiUrl + `/cadastrar`;
    return this.http.put<Cliente>(url, cliente, httpOptions);
  }
  excluir(cliente: string): Observable<any> {
    const url = `${this.apiUrl}/excluir/${cliente}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
