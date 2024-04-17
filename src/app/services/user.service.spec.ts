import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getUserLogged', () => {
    const newUser = {
      username: 'test01',
      password: 'test01'
    };
    service.setUserLogged = newUser;
    service.getUserLogged.subscribe(user => {
      expect(user.username).toBe('test01');
    });
  });

  it('should setUserLogged', () => {
    const newUser = {
      username: 'test01',
      password: 'test01'
    };
    service.setUserLogged = newUser;
    expect(service.userLogged$.value).toEqual(newUser);
  });
});
