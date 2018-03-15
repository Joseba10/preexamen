import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlquilerventasComponent } from './alquilerventas/alquilerventas.component';
import { DetalleComponent } from './alquilerventas/detalle/detalle.component';
import { ServicioService } from './providers/servicio.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterCasa } from './Pipes/nombrefilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AlquilerventasComponent,
    DetalleComponent,
    FilterCasa
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
