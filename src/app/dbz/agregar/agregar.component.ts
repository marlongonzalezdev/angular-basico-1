import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  newCharacter: Character = {
    name: '',
    power:  0
  };

  agregar(): void {
    if(this.newCharacter.name.trim().length ===0) {return;}
    
    this.dbzService.addCharacter(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0
    }
  }

  constructor(private dbzService: DbzService) { }
}
