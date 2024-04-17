import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkIfIsLogoutGuard } from './check-if-is-logout.guard';
import { UserService } from '../services/user.service';

describe('checkIfIsLogoutGuard', () => {
  let executeGuard: checkIfIsLogoutGuard;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    executeGuard = TestBed.inject(checkIfIsLogoutGuard);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should be canActivate', () => {
    const test = executeGuard.canActivate();
    expect(test).toBeFalsy();
  });

  it('should be canActivate false', () => {
    const newUser = {
      username: 'test01',
      password: 'test01'
    };
    service.setUserLogged = newUser;
    const test = executeGuard.canActivate();
    expect(test).toBeTruthy();
  });
});
