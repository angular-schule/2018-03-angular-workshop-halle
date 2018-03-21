import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor() { }

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
