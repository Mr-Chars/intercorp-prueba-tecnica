import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkIfIsLoggedOnGuard } from './check-if-is-logged-on.guard';

describe('checkIfIsLoggedOnGuard', () => {
  let executeGuard: checkIfIsLoggedOnGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    executeGuard = TestBed.inject(checkIfIsLoggedOnGuard);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
