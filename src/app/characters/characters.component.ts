import { CharactersApiService } from '../service/characters-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  constructor(
    private characterSvc: CharactersApiService,
    private router: Router) { }

  allCharacters: Observable<any> | undefined;
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalCharacters: number = 0;
  totalPages: number = 0;

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.characterSvc.getCharacters(this.currentPage, this.itemsPerPage);

    // Obtenha o número total de personagens da Marvel aqui
    this.totalCharacters = 100; // Substitua pelo número real
    this.calculateTotalPages();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalCharacters / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getCharacters();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getCharacters();
    }
  }

  getPageArray(): number[] {
    const pageArray = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pageArray.push(i);
    }
    return pageArray;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getCharacters();
    }
  }

  showDetails(characterId: number) {
    this.router.navigate(['/character', characterId]);
  }
}

