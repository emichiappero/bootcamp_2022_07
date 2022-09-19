import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buscar',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css'],
})
export class MiComponenteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Componente iniciado');
  }
}
