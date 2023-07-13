import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {UserLogin} from "../interfaces/auth/user-login";
import {UserRegister} from "../interfaces/auth/user-register";
import {UserLoginResponse} from "../interfaces/auth/user-login-response";
import {UserRegisterResponse} from "../interfaces/auth/user-register-response";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    @Inject('API_URL') public ApiUrl: String,
    private http: HttpClient,
  ) { }

  get accessToken(): string | null {
    return localStorage.getItem('accessToken')
  }

  login(userLogin: UserLogin): Observable<UserLoginResponse | null> {
    return this.http.post<UserLoginResponse>(this.ApiUrl + 'api/login/', userLogin)
      .pipe(
        tap(this.setAccessToken)
      )

  }

  register(userRegister: UserRegister): Observable<UserRegisterResponse> {
    return this.http.post<UserRegisterResponse>(this.ApiUrl + 'api/register/', userRegister)
  }

  logout() {
    this.setAccessToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.accessToken
  }

  private setAccessToken(response: UserLoginResponse | null) {
    if (response) {
      localStorage.setItem('accessToken', response.access)
    } else {
      localStorage.clear()
    }
  }
}
