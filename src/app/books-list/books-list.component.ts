import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [
 
    {
      name:"Libro 1",
      autor : "Autor 1",
      genere : "Género 1",
      price: 1000,
      stock : 10,
      image : "assets/img/libro1.jpg",
      clearance: false,
    },
    {
      name:"Libro 2",
      autor : "Autor 2",
      genere : "Género 2",
      price: 2000,
      stock : 0,
      image : "assets/img/libro2.jpg",
      clearance: false,
    },
    {
      name:"Libro 3",
      autor : "Autor 3",
      genere : "Género 3",
      price: 500,
      stock : 800,
      image : "assets/img/libro3.jpg",
      clearance: true,
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
