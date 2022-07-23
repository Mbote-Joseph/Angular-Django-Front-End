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

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe((data) => {
      this.getBooks();
    });
  }

  updateBook(book: Book) {
    this.bookService.updateBook(book).subscribe((data) => {
      this.getBooks();
    });
  }

  addBook(book: Book) {
    this.bookService.addBook(book).subscribe((data) => {
      this.getBooks();
    });
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
