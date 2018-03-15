import { ServicioService } from "../providers/servicio.service";
import { servicio } from "./servicio";

export class Casa{  
  
  nombre:string;
  precio:number;
  alquiler:boolean;
  habitaciones:number;
  foto:string;
  direccion:string;
 servicio:servicio[];





constructor( ){
    
this.nombre="";
this.precio=0;
this.alquiler=false;
this.habitaciones=0;
this.direccion="";
this.servicio=[];
this.foto='assets/imgs/casa.jpg';

}

}
