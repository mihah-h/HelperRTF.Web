import {Inject, Injectable} from '@angular/core';
import {Subject} from "../interfaces/subject/subject";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ChoiceSubject} from "../interfaces/subject/choice-subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectsApiService {

  constructor(
    @Inject('API_URL') public ApiUrl: String,
    private http: HttpClient,
  ) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.ApiUrl + 'api/subjects/')
  }

  getChoiceSubject(subjectId: string): Observable<ChoiceSubject> {
    return this.http.get<ChoiceSubject>(this.ApiUrl + 'api/choise-subjects/' + subjectId)
  }

  postChoiceSubjectFeedbacks(choiceSubjectFeedbacks) {
    return this.http.post(this.ApiUrl + 'api/choise-subjects/feedbacks/', choiceSubjectFeedbacks)
  }
}
