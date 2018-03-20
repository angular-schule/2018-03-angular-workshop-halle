import { BookComponent } from './book.component';
import { BookRatingService } from '../shared/book-rating.service';

fdescribe('BookComponent (Simple)', () => {
  let component: BookComponent;

  beforeEach(() => {
    component = new BookComponent();
    component.book = { isbn: '', title: '', description: '', rating: 2 };
  });

  it('rateUp should forward the call to the RatingService ', () => {
    component.rs = {
      rateUp: (book) => {}
    } as BookRatingService;

    spyOn(component.rs, 'rateUp');

    component.rateUp();

    expect(component.rs.rateUp).toHaveBeenCalled();
  });
});
