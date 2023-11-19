import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Onibus } from './Onibus';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class OnibusService {

  apiUrl = 'http://localhost:5230/onibus';
  constructor(private http: HttpClient) { }
  listar(): Observable<Onibus[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Onibus[]>(url);
  }
  buscar(placa: string): Observable<Onibus> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.get<Onibus>(url);
  }
  cadastrar(Onibus: Onibus): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Onibus>(url, Onibus, httpOptions);
  }
  atualizar(Onibus: Onibus): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Onibus>(url, Onibus, httpOptions);
  }
  excluir(placa: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
