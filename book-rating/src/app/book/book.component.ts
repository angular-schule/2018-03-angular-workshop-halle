import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  rs = new BookRatingService();

  constructor(/* private rs: BookRatingService */) {
  }

  @Input()
  book: Book;

  @Output()
  rated = new EventEmitter<Book>();

  getStars() {
    return new Array(this.book.rating);
  }

  rateUp() {
    this.book = this.rs.rateUp(this.book);
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book = this.rs.rateDown(this.book);
    this.rated.emit(this.book);
  }

}
