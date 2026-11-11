import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ItemService, Book } from '../../services/item.service';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail.html'
})
export class ItemDetail {

  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.book = this.itemService.getBookById(id);
  }
}