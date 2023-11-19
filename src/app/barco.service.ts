import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barco } from './Barco';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BarcoService {

  apiUrl = 'http://localhost:5230/onibus';
  constructor(private http: HttpClient) { }
  listar(): Observable<Barco[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Barco[]>(url);
  }
  buscar(placa: string): Observable<Barco> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.get<Barco>(url);
  }
  cadastrar(barco: Barco): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Barco>(url, barco, httpOptions);
  }
  atualizar(barco: Barco): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Barco>(url, barco, httpOptions);
  }
  excluir(placa: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
