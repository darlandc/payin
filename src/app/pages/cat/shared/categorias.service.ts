import { Categoria } from './categoria.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiUrl = 'api/categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategorias)
    );
  }

  getById(id: number): Observable<Categoria> {
    const url = `%{this.apiUrl}/%{id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategorias)
    );
  }

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post(this.apiUrl, categoria).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategorias)
    );
  }

  update(categoria: Categoria): Observable<Categoria> {
    const url = `%{this.apiUrl}/%{categoria.id}`;

    return this.http.put(url, categoria).pipe(
      catchError(this.handleError),
      map(() => categoria )
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  private jsonDataToCategorias(jsonData: any[]): Categoria[] {
    const categorias: Categoria[] = [];
    jsonData.forEach(el => categorias.push(el as Categoria));
    return categorias;
  }

  private jsonDataToCategoria(jsonData: any): Categoria {
    return jsonData as Categoria;
  }

  private handleError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }


}
