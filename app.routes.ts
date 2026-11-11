import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Items } from './pages/items/items';
import { ItemDetail } from './pages/item-detail/item-detail';
import { AddItem } from './pages/add-item/add-item';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'books', component: Items },
  { path: 'books/add', component: AddItem },
  { path: 'book/:id', component: ItemDetail }
];