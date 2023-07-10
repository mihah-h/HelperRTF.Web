import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {

  constructor(@Inject('API_URL') public ApiUrl: String) { }


}
