import { Injectable } from '@angular/core';
import { Casa } from '../model/casa';
import { servicio } from '../model/servicio';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

const END_POINT = "http://localhost:3000"; //Direccion del Servicio

@Injectable()
export class ServicioService{


  constructor( public http: HttpClient) { console.log('ServicioService constructor');}



  getCasas():Observable<any>{
    let url = END_POINT + '/casas';
    console.log(`ServicioService getCasas ${url}`);
  
    return this.http.get(url);
  
  }
  

}

