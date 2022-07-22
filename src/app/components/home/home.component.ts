import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];

  constructor() {}

  ngOnInit(): void {}
}
