import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  book = {
    "name":"Libro 1",
    "autor" : "Autor 1",
    "genere" : "Género 1",
    "price": 1000,
    "stock" : 10,
    "image" : "assets/img/libro1.jpg"

  }
  constructor() { }

  ngOnInit(): void {
  }

}
