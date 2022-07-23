import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/Book';
import { BookserviceService } from 'src/app/shared/bookservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookModel } from 'src/app/shared/book.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  formValue!: FormGroup;

  bookModelObject: BookModel = new BookModel();

  constructor(
    private bookService: BookserviceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      title: [''],
      author: [''],
      pages: [''],
      price: [''],
      publisher: [''],
    });
    this.getBooks();
  }

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
    this.bookModelObject.title = this.formValue.value.title;
    this.bookModelObject.author = this.formValue.value.author;
    this.bookModelObject.pages = this.formValue.value.pages;
    this.bookModelObject.price = this.formValue.value.price;
    this.bookModelObject.publisher = this.formValue.value.publisher;

    console.log(this.bookModelObject);

    this.bookService.addBook(book).subscribe((data) => {
      this.getBooks();
    });
  }
}
