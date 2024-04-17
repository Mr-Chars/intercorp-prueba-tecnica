import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkIfIsLoggedOnGuard } from './check-if-is-logged-on.guard';
import { UserService } from '../services/user.service';

describe('checkIfIsLoggedOnGuard', () => {
  let executeGuard: checkIfIsLoggedOnGuard;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    executeGuard = TestBed.inject(checkIfIsLoggedOnGuard);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should be canActivate', () => {
    const test = executeGuard.canActivate();
    expect(test).toBeTruthy();
  });

  it('should be canActivate false', () => {
    const newUser = {
      username: 'test01',
      password: 'test01'
    };
    service.setUserLogged = newUser;
    const test = executeGuard.canActivate();
    expect(test).toBeFalsy();
  });
});
