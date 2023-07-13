import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {SubjectsApiService} from "../shared/services/subjects-api.service";
import {Subscription, switchMap} from "rxjs";
import {ChoiceSubject} from "../shared/interfaces/subject/choice-subject";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnDestroy{
  choiceSubject!: ChoiceSubject
  choiceSubjectSub!: Subscription

  p = 3

  constructor(
    private route: ActivatedRoute,
    private subjectsApiService: SubjectsApiService
  ) {}

  ngOnInit(): void {
    this.choiceSubjectSub = this.route.params
      .pipe(switchMap((params: Params) => {
        const courseId: string = params['id']
        return this.subjectsApiService.getChoiceSubject(courseId)
      })).subscribe(choiceSubject => this.choiceSubject = choiceSubject)
  }

  ngOnDestroy(): void {
    this.choiceSubjectSub.unsubscribe()
  }

}
