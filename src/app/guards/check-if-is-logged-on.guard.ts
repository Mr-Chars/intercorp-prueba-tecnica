import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class checkIfIsLoggedOnGuard implements CanActivate {
  constructor(
    public usersService: UserService,
    public router: Router
  ) { }

  canActivate() {
    if (this.usersService.userLogged$.value.username) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
