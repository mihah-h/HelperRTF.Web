import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReviewsPageComponent } from './course-reviews-page.component';

describe('CourseReviewsPageComponent', () => {
  let component: CourseReviewsPageComponent;
  let fixture: ComponentFixture<CourseReviewsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseReviewsPageComponent]
    });
    fixture = TestBed.createComponent(CourseReviewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
