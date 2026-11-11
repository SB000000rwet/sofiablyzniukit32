import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html'
})
export class CourseCardComponent {
  @Input() courseName: string = '';
  @Input() teacher: string = '';

  duration: string = '20 годин';

  @Output() enroll = new EventEmitter<void>();

  enrollCourse() {
    this.enroll.emit();
  }
}