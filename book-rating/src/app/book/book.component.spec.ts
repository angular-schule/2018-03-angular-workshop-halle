import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '00000',
      title: 'Mein Titel',
      description: 'Beschreibung',
      rating: 3
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct rating', () => {
    const ratingBox = fixture.debugElement.query(By.css('span.rating-box'));
    expect(ratingBox.nativeElement.textContent).toBe('3');

    component.book = { ...component.book, rating: 5 };
    fixture.detectChanges();
    expect(ratingBox.nativeElement.textContent).toBe('5');
  });
});
