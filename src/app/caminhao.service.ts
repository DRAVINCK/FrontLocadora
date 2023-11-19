import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caminhao } from './Caminhao';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CaminhaoService {

  apiUrl = 'http://localhost:5230/caminhao';
  constructor(private http: HttpClient) { }
  listar(): Observable<Caminhao[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Caminhao[]>(url);
  }
  buscar(placa: string): Observable<Caminhao> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.get<Caminhao>(url);
  }
  cadastrar(Caminhao: Caminhao): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Caminhao>(url, Caminhao, httpOptions);
  }
  atualizar(Caminhao: Caminhao): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Caminhao>(url, Caminhao, httpOptions);
  }
  excluir(placa: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
