import { BookRatingService } from './book-rating.service';
import { Book } from './book';

describe('BookRatingService', () => {
  let book: Book;
  let rs: BookRatingService;

  beforeEach(() => {
    rs = new BookRatingService();
    book = { isbn: '', title: '', description: '', rating: 1 };
  });

  it('rateUp() should rate up by 1', () => {
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('rateDown() should rate down by 1', () => {
    book.rating = 3;
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('rating should not be allowed to be greater than 5', () => {
    book.rating = 5;
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('rating should not be allowed to be less than 1', () => {
    book.rating = 1;
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});
