import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { USER } from '../../interfaces/generals.interface';
import { Router } from '@angular/router';
import { CREDENTIALS_USER_TEST } from '../../constans.ts/generals';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required]),
  });

  get username() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }
  constructor(
    public readonly userService: UserService,
    public router: Router
  ) { }

  login() {
    const username = this.loginForm?.value?.username;
    const password = this.loginForm?.value?.password;

    if (username === CREDENTIALS_USER_TEST.username && password === CREDENTIALS_USER_TEST.password) {
      const user: USER = {
        username, password
      }
      this.userService.setUserLogged = user;
      this.router.navigate(['/']);
    }
  }

}
