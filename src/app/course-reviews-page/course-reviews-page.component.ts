import { Component } from '@angular/core';

@Component({
  selector: 'app-course-reviews-page',
  templateUrl: './course-reviews-page.component.html',
  styleUrls: ['./course-reviews-page.component.scss']
})
export class CourseReviewsPageComponent {
  search: string = ''
  activeItemIndex = 0
  rateValue = 4

  onClick(name: string) {
    if (name === 'courses') {
      this.activeItemIndex = 0
    }
    if (name === 'teacher') {
      this.activeItemIndex = 1
    }
  }

}
