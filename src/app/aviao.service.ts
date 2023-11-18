import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aviao } from './Aviao';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AviaoService {

  apiUrl = 'http://localhost:5230/Carro';
  constructor(private http: HttpClient) { }
  listar(): Observable<Aviao[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Aviao[]>(url);
  }
  buscar(placa: string): Observable<Aviao> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.get<Aviao>(url);
  }
  cadastrar(Aviao: Aviao): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Aviao>(url, Aviao, httpOptions);
  }
  atualizar(Aviao: Aviao): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Aviao>(url, Aviao, httpOptions);
  }
  excluir(placa: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
