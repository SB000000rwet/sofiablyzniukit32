declare module '@angular/core' {
  export function Component(options: any): any;
  export function Input(): any;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() platformName: string = '';
}