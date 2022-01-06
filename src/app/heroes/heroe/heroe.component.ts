import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  nombre: string = 'Iron-man';
  edad: number = 20;

  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado():string
  {
     return this.nombre.toLocaleUpperCase();
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void{
    this.edad = 45;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
