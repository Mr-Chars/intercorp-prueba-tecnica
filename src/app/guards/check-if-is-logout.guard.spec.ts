import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkIfIsLogoutGuard } from './check-if-is-logout.guard';

describe('checkIfIsLogoutGuard', () => {
  let executeGuard: checkIfIsLogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    executeGuard = TestBed.inject(checkIfIsLogoutGuard);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
