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
searchtext:string;
  constructor(public ServicioService: ServicioService) {
    this.vivienda = [];

    console.log("AlquilerventasComponent constructor");
  }

  ngOnInit() {
    console.log("AlquilerventasComponent ngOnInit");
    this.ServicioService.getCasas().subscribe(

      resultado => {
        console.debug("peticion correcta %o", resultado);
        this.mapeo(resultado); 
             this.casaSelect=this.vivienda[0] || new Casa;
      },
      error => {
        console.warn("peticion incorrecta %o", error);
      }
    ); //subscribe
  }

  mapeo(result: any) {
   

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
      console.log(
        "Se acaba de meter la informacion al array %a",
        caracteristicas
      );
    });
  }

 CambioCasa(casa: Casa) {
    console.log("seleccionarcasa");
    this.casaSelect = casa;
    console.log("Infomacion de casaSelect", this.casaSelect);
  }


}
