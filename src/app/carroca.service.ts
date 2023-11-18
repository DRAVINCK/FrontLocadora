import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carroca } from './Carroca';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CarrocaService {

  apiUrl = 'http://localhost:5230/Carro';
  constructor(private http: HttpClient) { }
  listar(): Observable<Carroca[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Carroca[]>(url);
  }
  buscar(placa: string): Observable<Carroca> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.get<Carroca>(url);
  }
  cadastrar(carroca: Carroca): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Carroca>(url, carroca, httpOptions);
  }
  atualizar(carroca: Carroca): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Carroca>(url, carroca, httpOptions);
  }
  excluir(placa: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
