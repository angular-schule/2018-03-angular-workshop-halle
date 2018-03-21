import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { map, filter, debounceTime, distinctUntilChanged, scan, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup;
  @Output() bookCreate = new EventEmitter<Book>();

  isbn$: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });

    // this.bookForm.valueChanges.subscribe(e => console.log('valueChanges', e));

    this.isbn$ = this.bookForm.valueChanges.pipe(
      map(value => value.isbn),
      // filter(isbn => isbn.startsWith('1')),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(isbn => this.http.get('http://api.angular.schule/book/' + isbn))
      // scan((acc: string[], item: string) => [...acc, item], [])
    );
  }

  logForm() {
    console.log(this.bookForm);
  }

  submitForm() {
    const value = this.bookForm.value;

    // Optimierung: In Factory auslagern, z.B. formToBook()
    const book: Book = {
      ...value,
      rating: 1
    };

    this.bookCreate.emit(book);
    this.bookForm.reset();
  }

}
