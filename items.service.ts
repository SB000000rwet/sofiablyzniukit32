import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  books: Book[] = [
    {
      id: 1,
      title: '1984',
      author: 'Джордж Орвелл',
      description: 'Антиутопічний роман'
    },
    {
      id: 2,
      title: 'Маленький принц',
      author: 'Антуан де Сент-Екзюпері',
      description: 'Філософська казка про дружбу та любов'
    },
    {
      id: 3,
      title: 'Кобзар',
      author: 'Тарас Шевченко',
      description: 'Збірка поетичних творів'
    }
  ];

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  addBook(book: Book): void {
    this.books.push(book);
  }
}