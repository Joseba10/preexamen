import { Component, OnInit,Input } from '@angular/core';
import { Casa } from '../../model/casa';
import { ServicioService } from '../../providers/servicio.service';
import { Servicio } from '../../model/servicio';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {


  vivienda: Casa[];
  servicios: ServicioService[];

@Input ('casa') infocasa: Casa;


  constructor(public servicioService: ServicioService) {
  

this.infocasa= new Casa();
    this.vivienda = [];
    console.log("Informacion del input",this.infocasa);
  }

  ngOnInit() {

    /* console.log('TodosComponent ngOnInit');
     this.servicioService.getCasas().subscribe(
       resultado => {
         console.debug('peticion correcta %o', resultado);
         this.mapeo(resultado);
       },
       error => {
         console.warn('peticion incorrecta %o', error);
       }
     );//subscribe*/
  }
  /*
    mapeo(result: any) {
  
      let caracteristicas: alquiler, servicios: servicio;
      result.forEach(el => {
        caracteristicas = new alquiler();
        caracteristicas.nombre = el.nombre;
        caracteristicas.precio = el.precio;
        caracteristicas.direccion = el.direccion;
        caracteristicas.foto = el.foto;
        caracteristicas.habitaciones = el.habitaciones;
        caracteristicas.alquiler = el.alquiler;
  
  
        el.servicio.forEach(s => {
          servicios = new servicio();
          servicios.nombre = s.nombre;
          servicios.disponible = s.disponible;
  
  
  
          caracteristicas.servicio.push(servicios);
  
        }),
  
          this.vivienda.push(caracteristicas);
  
  
  
  
  
  
      })
  
  
  }*/
}