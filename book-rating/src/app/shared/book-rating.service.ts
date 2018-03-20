import { Book } from './book';

export class BookRatingService {
  rateUp(book: Book): Book {
    return { ...book, rating: Math.min(5, book.rating + 1) };

    /*
    if (book.rating >= 5) {
      return book;
    }
    return { ...book, rating: book.rating + 1 };
    */

    // Alternativ:
    // const rating = book.rating + 1;
    // return { ...book, rating };
  }

  rateDown(book: Book): Book {
    return { ...book, rating: Math.max(1, book.rating - 1) };
    /*
    if (book.rating <= 1) {
      return book;
    }
    return { ...book, rating: book.rating - 1 };
    */
  }
}


/*
    Object.assign({}, book, { rating: book.rating + 1 });

    const newBook: Book = {
      isbn: book.isbn,
      title: book.title,
      description: book.description,
      rating: book.rating + 1
    };
  */
