import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherReviewsPageComponent } from './teacher-reviews-page.component';

describe('TeacherReviewsPageComponent', () => {
  let component: TeacherReviewsPageComponent;
  let fixture: ComponentFixture<TeacherReviewsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherReviewsPageComponent]
    });
    fixture = TestBed.createComponent(TeacherReviewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
