import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Book } from '../books-list/Book';
import { BusquedasService } from '../busquedas.service';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-books-por-parametro',
  templateUrl: './books-por-parametro.component.html',
  styleUrls: ['./books-por-parametro.component.scss']
})
export class BooksPorParametroComponent implements OnInit {

  books:Book[]=[];
parametro:string;

constructor(private activatedRoute:ActivatedRoute,
            private carrito:CarritoComprasService,
            private _librosService:BusquedasService) {
            this.parametro=activatedRoute.snapshot.url.join('');
              console.log(this.parametro);
            }

  ngOnInit(): void {

      this.books=this._librosService.buscarLibrosPorParametro(this.parametro);


  }
  agregarACarrito(book):void{
    this.carrito.agregarACarrito(book);
    book.stock-=book.quantity;
    book.quantity=0;
  }

  llegoAMax(mensaje:string){
    alert(mensaje);
  }

}
