import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  title = 'bases';
  number = 0;
  base = 5;

  addOne(value: number): void {
    this.number += 5;
  }

  lessOne(value: number): void {
    this.number -= value;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
