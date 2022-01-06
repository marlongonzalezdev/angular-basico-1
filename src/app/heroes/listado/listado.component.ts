import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor'];
  deleted: string  = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe():void {
    console.log('borrando....');
    this.deleted = this.heroes.shift() || '';
  }
}
