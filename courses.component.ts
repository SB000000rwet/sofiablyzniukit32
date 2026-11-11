import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  courses = [
    { name: 'Angular', teacher: 'Іван Петренко' },
    { name: 'JavaScript', teacher: 'Олена Коваль' },
    { name: 'Python', teacher: 'Андрій Шевченко' }
  ];

  onEnroll() {
    alert('Ви записалися на курс');
  }
}