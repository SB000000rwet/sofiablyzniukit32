import { Component } from '@angular/core';
import { AddBookComponent } from './add-book/add-book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddBookComponent],
  templateUrl: './app.html'
})
export class App {}