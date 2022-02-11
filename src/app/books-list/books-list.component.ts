import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Book } from './Book';
import{BusquedasService} from '../busquedas.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

books:Book[] = [];
  constructor(  private carrito:CarritoComprasService,
                private _booksService:BusquedasService) {

  }

  ngOnInit(): void {
    this.books = this._booksService.getLibros();
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
