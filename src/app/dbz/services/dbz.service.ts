import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegueta',
      power: 7500,
    },
  ];

  get personajes(): Character[] {
    return [...this._characters];
  }

  constructor() {
  }

  addCharacter(newCharacter: Character): void {
    this._characters.push(newCharacter);
  }
}
