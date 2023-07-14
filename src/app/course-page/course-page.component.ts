import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {SubjectsApiService} from "../shared/services/subjects-api.service";
import {Subscription, switchMap} from "rxjs";
import {ChoiceSubject} from "../shared/interfaces/subject/choice-subject";
import {FormControl, Validators} from "@angular/forms";
import {UserRegister} from "../shared/interfaces/auth/user-register";
import {ChoiceSubjectFeedbacks} from "../shared/interfaces/subject/choice-subject-feedbacks";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnDestroy{
  choiceSubject!: ChoiceSubject
  choiceSubjectSub!: Subscription

  text!: FormControl
  understanding_rating = 0
  speed_rating = 0
  overall_rating = 0

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

    this.text = new FormControl(null, [Validators.required])
  }

  ngOnDestroy(): void {
    this.choiceSubjectSub.unsubscribe()
  }

  leaveReview(): void {
    const choiceSubjectFeedbacks: ChoiceSubjectFeedbacks = {
      text: this.text.value,
      understanding_rating: this.understanding_rating,
      speed_rating: this.speed_rating,
      overall_rating: this.overall_rating,
      date: Date.now().toString(),
      choiseSubject: this.choiceSubject.id,
      user: 1
    }

    this.subjectsApiService.postChoiceSubjectFeedbacks(choiceSubjectFeedbacks).subscribe()
  }

  checkInvalidFeedBacks() {
    return this.text.invalid || this.speed_rating === 0
      || this.understanding_rating === 0 || this.overall_rating === 0
  }
}
