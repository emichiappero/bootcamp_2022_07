import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea_modelo } from '../models/tareas';

@Injectable({
  providedIn: 'root',
})
export class TodoServService {
  constructor(private http: HttpClient) {}

  URL_API = 'http://localhost:3000';

  //miArray: tipo = [];
  documentos: Tarea_modelo[] = [];

  obtenerTareas() {
    //Crear una petición http al servidor ---> GET http://localhost:3000/tareas
    let peticion = this.http.get<Tarea_modelo[]>(this.URL_API + '/tareas');
    return peticion;
  }
}
