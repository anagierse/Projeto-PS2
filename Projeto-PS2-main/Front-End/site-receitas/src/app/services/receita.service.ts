import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from '../models/receita-model';
@Injectable({
  providedIn: 'root'
})

export class ReceitaService {
  private baseUrl = 'http://localhost:8080/api/receitas'; 

  constructor(private http: HttpClient) {}

  getAllReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(`${this.baseUrl}`);
  }

  getReceitaById(id: number): Observable<Receita> {
    return this.http.get<Receita>(`${this.baseUrl}/${id}`);
  }

  saveReceita(receita: Receita): Observable<Receita> {
    return this.http.post<Receita>(`${this.baseUrl}`, receita);
  }
  deleteReceita(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}




