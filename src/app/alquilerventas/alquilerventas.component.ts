import { Component, OnInit } from "@angular/core";
import { ServicioService } from "../providers/servicio.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";
import { Servicio } from "../model/servicio";
import { Casa } from "../model/casa";

@Component({
  selector: "app-alquilerventas",
  templateUrl: "./alquilerventas.component.html",
  styleUrls: ["./alquilerventas.component.scss"]
})
export class AlquilerventasComponent implements OnInit {
  vivienda: Casa[];
  casaSelect: Casa;

  constructor(public servicioService: ServicioService) {
    this.vivienda = [];
  }

  ngOnInit() {
    console.log("TodosComponent ngOnInit");
    this.servicioService.getCasas().subscribe(
      resultado => {
        console.debug("peticion correcta %o", resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn("peticion incorrecta %o", error);
      }
    ); //subscribe
  }

  mapeo(result: any) {
    /*
let c:casa,s:servicio;

for (result => el{

c=new casa();
c.nombre=el.nombre

for el.servicio => servicio{

s=new servicio();
s.nombre=servicio.nombre;
c.servicios.push(s);


}
this.casa.push(c);
  
}

*/

    let caracteristicas: Casa; //servicios: servicio;
    result.forEach(el => {
      caracteristicas = new Casa();
      caracteristicas.nombre = el.nombre;
      caracteristicas.precio = el.precio;
      caracteristicas.direccion = el.direccion;
      caracteristicas.foto = el.foto;
      caracteristicas.habitaciones = el.habitaciones;
      caracteristicas.alquiler = el.alquiler;

      /*
      el.servicio.forEach(s => {
        servicios = new servicio();
        servicios.nombre = s.nombre;
        servicios.disponible = s.disponible;



        caracteristicas.servicio.push(servicios);

      }),
*/
      this.vivienda.push(caracteristicas);
console.log("Se acaba de meter la informacion al array %a",caracteristicas);

    });
  }


  seleccionarcasa(casa: Casa){

console.log("seleccionarcasa");
   this.casaSelect= casa ;
   console.log("Infomacion de casaSelect",this.casaSelect);
  }
}
