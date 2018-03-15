import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';
@Pipe({
    name: 'nombrefilter'
})
export class FilterCasa implements PipeTransform {

    /**
     * Filtro para buscar en una coleccion de Coches. No es CaseSensitive.
     * @param items : Coche[]
     * @param searchText : string con la marca o modelo del coche
     */
    transform(items: Casa[], searchText: string): Casa[] {
  
      
   //Filtro por nombre y direccion
   
    if(!items) return [];
      if(!searchText) return items;
      searchText = searchText.toLowerCase();
      let busqueda = "";
      return items.filter( it => {
          busqueda = it.nombre + " " + it.direccion;        
          busqueda = busqueda.toLowerCase();
          return busqueda.includes(searchText);
      });
     }
  
  }