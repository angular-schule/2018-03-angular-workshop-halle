import { BookComponent } from './book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { Book } from '../shared/book';

describe('BookComponent (Simple)', () => {
  let component: BookComponent;

  beforeEach(() => {
    component = new BookComponent();
    component.book = { isbn: '', title: '', description: '', rating: 2 };
  });

  it('rateUp should forward the call to the RatingService ', () => {
    component.rs = {
      rateUp: (book) => {}
    } as BookRatingService;

    spyOn(component.rs, 'rateUp').and.callThrough();

    component.rateUp();

    expect(component.rs.rateUp).toHaveBeenCalled();
  });

  it('should fire rated event for rateUp', () => {
    component.rs = {
      rateUp: (_book) => {
        return component.book;
      }
    } as BookRatingService;

    let book: Book;

    component.rated.subscribe(b => {
      book = b;
    });

    component.rateUp();
    expect(book).toBe(component.book);
  });
});
