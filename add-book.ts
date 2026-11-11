import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book.html'
})
export class AddBookComponent {

  title = '';
  author = '';
  description = '';

  books: any[] = [];

  addBook(form: any) {

    if (form.invalid) {
      return;
    }

    const newBook = {
      title: this.title,
      author: this.author,
      description: this.description
    };

    this.books.push(newBook);

    form.resetForm();
  }

}