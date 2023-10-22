import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = 'b48b3dfd10e0f7c04cf760a4726fa918';
  HASH = '17012d39ccda483acac7e779d57b59b8';
  baseUrl = 'https://gateway.marvel.com/v1/public/characters';

  constructor(private http: HttpClient) { }

  getCharacters(page: number, limit: number): Observable<any> {
    const offset = (page - 1) * limit;
    const url = `${this.baseUrl}?ts=2&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&offset=${offset}&limit=${limit}`;

    return this.http.get<any>(url)
      .pipe(map((data: any) => data.data.results));
  }
}
