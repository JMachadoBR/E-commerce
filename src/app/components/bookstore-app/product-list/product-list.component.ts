import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Book } from './model/books';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  booksService: BooksService;

  constructor(booksService: BooksService) {

    this.booksService = booksService;

   }

  ngOnInit(): void {

    this.livros = this.booksService.getBooks().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))

  }

}
