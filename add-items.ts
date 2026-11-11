import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-item.html'
})
export class AddItem {

  bookForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]
    }),

    author: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]
    }),

    description: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10)
      ]
    })
  });

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {}

  addBook() {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    const data = this.bookForm.getRawValue();

    const newBook = {
      id: Math.max(
        0,
        ...this.itemService.getBooks().map(book => book.id)
      ) + 1,

      title: data.title,
      author: data.author,
      description: data.description
    };

    this.itemService.addBook(newBook);

    this.router.navigate(['/books']);
  }
}