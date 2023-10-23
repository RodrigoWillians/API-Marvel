
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = environment.publicKey;
  HASH = environment.hash;
  baseUrl = 'https://gateway.marvel.com/v1/public/characters';

  constructor(private http: HttpClient) { }

  getCharacters(page: number, limit: number): Observable<any> {
    const offset = (page - 1) * limit;
    const url = `${this.baseUrl}?ts=2&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&offset=${offset}&limit=${limit}`;

    return this.http.get<any>(url).pipe(
      map((data: any) => data.data.results),
      catchError((error: any) => {
        console.error('Ocorreu um erro ao buscar personagens:', error);
        return of([]);
      })
    );
  }
}
