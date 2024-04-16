import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { USER } from '../interfaces/generals.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public readonly userLogged$ = new BehaviorSubject({
    username: '',
    password: ''
  });

  constructor() { }

  get getUserLogged() {
    return this.userLogged$.asObservable();
  }

  set setUserLogged(user: USER) {
    this.userLogged$.next(user);
  }
}
