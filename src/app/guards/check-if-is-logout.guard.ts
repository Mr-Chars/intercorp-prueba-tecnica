import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class checkIfIsLogoutGuard implements CanActivate {
  constructor(
    public usersService: UserService,
    public router: Router
  ) { }

  canActivate() {
    if (!this.usersService.userLogged$.value.username) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
