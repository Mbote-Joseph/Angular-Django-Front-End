import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from './Book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookserviceService {
  books: Book[] = [];

  url: string = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + 'get');
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.url + 'get/' + id);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url + 'post', book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.url + 'put/' + book.id, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.url + 'delete/' + id);
  }
}
