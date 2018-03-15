import { Component, OnInit,Input } from '@angular/core';
import { Casa } from '../../model/casa';
import { ServicioService } from '../../providers/servicio.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {


@Input ('Casa') infocasa: Casa;


  constructor(public servicioService: ServicioService) {
  

this.infocasa= new Casa();

    console.log("Informacion del input",this.infocasa);
  }

  ngOnInit() {

    
}
}