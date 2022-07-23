import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/Book';
import { BookserviceService } from 'src/app/shared/bookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookserviceService) {}
  getBooks() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      console.log(this.books);
    });
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
