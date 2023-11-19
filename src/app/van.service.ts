import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Van } from './Van';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class VanService {

  apiUrl = 'http://localhost:5230/van';
  constructor(private http: HttpClient) { }
  listar(): Observable<Van[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Van[]>(url);
  }
  buscar(placa: string): Observable<Van> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.get<Van>(url);
  }
  cadastrar(van: Van): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Van>(url, van, httpOptions);
  }
  atualizar(van: Van): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Van>(url, van, httpOptions);
  }
  excluir(placa: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
