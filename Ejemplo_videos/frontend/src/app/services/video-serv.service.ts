import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video_modelo } from '../models/videos';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class VideoServService {
  constructor(private http: HttpClient) {}

  URL_API = 'http://localhost:3000';

  documentos: Video_modelo[] = [];

  datosForm: Video_modelo = {
    nombre: '',
    url_video: '',
    fuente: '',
    categoria: '',
  };

  obtenerVideos() {
    //Vamos a hacer una petición al servidor
    // petición por GET a http://localhost:3000/videos
    let peticion = this.http.get<Video_modelo[]>(this.URL_API + '/videos');
    return peticion;
  }

  insertarVideo(datos: Video_modelo) {
    //Hacemos una petición por POST a http://localhost:3000/insertar_video
    let peticion = this.http.post(this.URL_API + '/insertar_video', datos);
    return peticion;
  }

  eliminarVideo(id: string) {
    //Hacemos una petición por DELETE a http://localhost:3000/eliminar_video/123123123213123
    let peticion = this.http.delete(this.URL_API + '/eliminar_video/' + id);
    return peticion;
  }

  modificarVideo(datos: Video_modelo) {
    //Hacemos una petición por PUT a http://localhost:3000/modificar_video/123123123213
    let peticion = this.http.put(
      this.URL_API + '/modificar_video/' + datos._id,
      datos
    );

    return peticion;
  }
}
