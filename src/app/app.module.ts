import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule} from '@angular/forms';

// Componentes
import { BooksContactoComponent } from './books-contacto/books-contacto.component';
import { BooksCarritoComponent } from './carrito/carrito.component';
import { BooksListComponent } from './books-list/books-list.component';
import { InputDecreIncreComponent } from './input-decre-incre/input-decre-incre.component';


//Servicios
import{BusquedasService} from './busquedas.service';
import { BooksPorParametroComponent } from './books-por-parametro/books-por-parametro.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksContactoComponent,
    BooksCarritoComponent,

    InputDecreIncreComponent,
    BooksPorParametroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [BusquedasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
