import { Component, OnInit } from '@angular/core';
import { VideoServService } from '../../services/video-serv.service';
import { NgForm } from '@angular/forms';
import { Video_modelo } from '../../models/videos';

@Component({
  selector: 'videos',
  templateUrl: './videos-comp.component.html',
  styleUrls: ['./videos-comp.component.css'],
})
export class VideosCompComponent implements OnInit {
  constructor(public videoServ: VideoServService) {}

  ngOnInit(): void {
    this.listadoVideos();
  }

  listadoVideos() {
    //llamamos al metodo de nuestro servicio
    this.videoServ.obtenerVideos().subscribe({
      next: (res) => {
        console.log('--- Obteniendo videos - READ ---');
        this.videoServ.documentos = res;
      },
      error: (err) => console.log(err),
    });
  }

  agregarVideo(formulario: NgForm) {
    //console.log(formulario.value);

    if (formulario.value._id) {
      //Actualizar el video
      //Llamamos al método,  de nuestro Servicio, para actualizar un video
      this.videoServ.modificarVideo(formulario.value).subscribe({
        next: (res) => {
          //Cuando se inserta el nuevo video, llamo/ejecuto el metodo para (re)cargar el listado
          this.listadoVideos();
          formulario.reset();
        },
        error: (err) => console.log(err),
      });
    } else {
      //Insertar un video
      //Llamamos al método,  de nuestro Servicio, para insertar un nuevo video
      this.videoServ.insertarVideo(formulario.value).subscribe({
        next: (res) => {
          //Cuando se inserta el nuevo video, llamo/ejecuto el metodo para (re)cargar el listado
          this.listadoVideos();
          formulario.reset();
        },
        error: (err) => console.log(err),
      });
    }
  }

  eliminarVideo(id: any) {
    let confirmacion = confirm('Desea eliminar el video #' + id + '?');
    console.log(confirmacion);
    if (confirmacion == true) {
      //Llamar al metodo de nuestro Servicio, para eliminar el video
      this.videoServ.eliminarVideo(id).subscribe({
        next: (res) => {
          //Cuando se elimina un video, llamo/ejecuto el metodo para (re)cargar el listado
          this.listadoVideos();
        },
        error: (err) => console.log(err),
      });
    }
  }

  modificarVideo(video: Video_modelo) {
    console.log(video);
    this.videoServ.datosForm = video;
  }
}
