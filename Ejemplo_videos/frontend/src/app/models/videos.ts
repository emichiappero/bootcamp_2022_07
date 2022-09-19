export interface Video_modelo {
  nombre: string;
  url_video: string;
  fuente: string;
  categoria: string;
  _id?: string;
}

//El signo de pregunta (?) significa que este campo es OPCIONAL

/*
CRUD
C = No tengo el dato _id (porque lo genera/crea Mongo)
R = Si tengo el _id
U = Si tengo el _id
D = Si tengo el _id
*/
