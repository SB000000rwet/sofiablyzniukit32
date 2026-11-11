import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './items.html'
})
export class Items {

  books;

  constructor(private itemService: ItemService) {
    this.books = this.itemService.getBooks();
  }

}