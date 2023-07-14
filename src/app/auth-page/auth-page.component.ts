import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthApiService} from "../shared/services/auth-api.service";
import {Router} from "@angular/router";
import {UserLogin} from "../shared/interfaces/auth/user-login";
import {UserLoginResponse} from "../shared/interfaces/auth/user-login-response";
import {UserRegister} from "../shared/interfaces/auth/user-register";
import {UserRegisterResponse} from "../shared/interfaces/auth/user-register-response";
import {TuiAlertService} from "@taiga-ui/core";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit{
  activeItemIndex = 0

  loginForm!: FormGroup
  registrationForm!: FormGroup
  submitted = false

  constructor(
    private auth: AuthApiService,
    private router: Router,
    @Inject(TuiAlertService) private readonly alert: TuiAlertService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailLogin: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      passwordLogin: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })

    this.registrationForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      emailRegister: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      passwordRegister: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
    })
  }

  changeTab(name: string) {
    if (name === 'login') {
      this.activeItemIndex = 0
      this.registrationForm.reset()
    }
    if (name === 'registration') {
      this.activeItemIndex = 1
      this.loginForm.reset()
    }
  }

  loginSubmit() {
    if (this.loginForm.invalid) {
      return
    }

    this.submitted = true

    const userLogin: UserLogin = {
      email: this.loginForm.value.emailLogin,
      password: this.loginForm.value.passwordLogin
    }

    this.auth.login(userLogin).subscribe(userLoginResponse => {
      this.loginForm.reset()
      this.submitted = false
      this.router.navigate(['/main'])
      this.alert
        .open('Вы успешно вошли в аккаунт')
        .subscribe()
    }, () => {
      this.submitted = false
    })
  }

  registerSubmit() {
    if (this.registrationForm.invalid) {
      return
    }

    const userRegister: UserRegister = {
      name: this.registrationForm.value.name,
      email: this.registrationForm.value.emailRegister,
      password: this.registrationForm.value.passwordRegister,
    }

    this.auth.register(userRegister).subscribe(userRegisterResponse => {
      this.submitted = false
      const userLogin: UserLogin = {
        email: userRegister.email,
        password: userRegister.password
      }
      this.auth.login(userLogin).subscribe(() => {
          this.router.navigate(['/main'])
          this.alert
            .open('Вы успешно вошли в аккаунт')
            .subscribe()
        }
      )
      this.registrationForm.reset()
      this.alert
        .open('Вы успешно зарегистрировались')
        .subscribe()
    }, () => {
      this.submitted = false
    })
  }

  onClose(): void {
    this.alert
      .open('Close button is visible when you subscribe to (close) output')
      .subscribe()
  }
}
