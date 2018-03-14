import { Component, OnInit } from '@angular/core';
import { alquiler } from '../../model/alquiler';
import { ServicioService } from '../../providers/servicio.service';
import { servicio } from '../../model/servicio';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {


  vivienda: alquiler[];
  servicios: ServicioService[];


  constructor(public servicioService: ServicioService) {

    this.vivienda = [];
  }

  ngOnInit() {

    console.log('TodosComponent ngOnInit');
    this.servicioService.getCasas().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }

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


      el.service.forEach(s => {
        servicios = new servicio();
        servicios.nombre = s.nombre;
        servicios.disponible = s.disponible;



        caracteristicas.servicio.push(servicios);

      }),

        this.vivienda.push(caracteristicas);






    })


}
}