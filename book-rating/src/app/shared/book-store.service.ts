import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get<Book[]>('http://api.angular.schule/books')
      .pipe(
        retry(5),
        catchError(err => of([
          { isbn: '', title: 'FEHLER', description: 'Das ist ein Fehler... sorry', rating: 1 }
        ]))
      );
  }

  create(book: Book): Observable<any> {
    return this.http.post('http://api.angular.schule/book', book, { responseType: 'text' });
  }


  getAllStatic(): Book[] {
    return [
      {
        isbn: '000',
        title: 'Angularrrr',
        description: 'Grundlagen, fortgeschrittene Techniken, …',
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        rating: 3
      },
    ];
  }

}
