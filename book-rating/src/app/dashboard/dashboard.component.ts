import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.bs.getAll().subscribe(
      e => this.books = e,
      err => console.log('err', err)
    );
  }

  add(book: Book) {
    this.bs.create(book).subscribe(() => {
      this.updateAddReorder(book);
    });
  }

  updateAddReorder(book: Book) {
    const cleanedList = this.books.filter(b => b.isbn !== book.isbn);
    this.books = [...cleanedList, book]
      .sort((a, b) => b.rating - a.rating);
  }

  trackByFn(index: number, item: Book) {
    return item.isbn;
  }

}


/*
ISBN
Titel
Beschreibung
Bewertung

Autor(en)
Seitenzahl
Erscheinungsjahr
Inhalt
Sprache
Verlag
*/
