import {Inject, Injectable} from '@angular/core';
import {Subject} from "../interfaces/subject/subject";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

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
}
