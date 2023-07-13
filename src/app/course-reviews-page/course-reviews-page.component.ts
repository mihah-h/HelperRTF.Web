import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubjectsApiService} from "../shared/services/subjects-api.service";
import {Subscription} from "rxjs";
import {Subject} from "../shared/interfaces/subject/subject";
import {AuthApiService} from "../shared/services/auth-api.service";

@Component({
  selector: 'app-course-reviews-page',
  templateUrl: './course-reviews-page.component.html',
  styleUrls: ['./course-reviews-page.component.scss']
})
export class CourseReviewsPageComponent implements OnInit, OnDestroy{
  searchParameter: string = ''
  activeItemIndex = 0

  subjects!: Subject[]

  getSubjectsSub!: Subscription

  constructor(
    private subjectsApiService: SubjectsApiService,
    public apiService: AuthApiService
  ) {}

  ngOnInit(): void {
    this.getSubjectsSub = this.subjectsApiService.getSubjects()
      .subscribe(subjects => this.subjects = subjects)
  }

  ngOnDestroy(): void {
    this.getSubjectsSub.unsubscribe()
  }

  changeTab(name: string) {
    if (name === 'courses') {
      this.activeItemIndex = 0
    }
    if (name === 'teacher') {
      this.activeItemIndex = 1
    }
  }



}
