import { Component, OnInit } from '@angular/core';
import { TodoServService } from '../../services/todo-serv.service';

@Component({
  selector: 'todo-comp',
  templateUrl: './todo-comp.component.html',
  styleUrls: ['./todo-comp.component.css'],
})
export class TodoCompComponent implements OnInit {
  constructor(public todoServicio: TodoServService) {}

  ngOnInit(): void {
    this.listadoTareas();
  }

  //Metodo que obtiene del servicio, los documentos
  listadoTareas() {
    this.todoServicio.obtenerTareas().subscribe({
      next: (res) => {
        console.log('----- Obteniendo tareas desde el servidor -----');
        console.log(res);
        this.todoServicio.documentos = res;
      },
      error: (err) => console.log(err),
    });
  }
}
