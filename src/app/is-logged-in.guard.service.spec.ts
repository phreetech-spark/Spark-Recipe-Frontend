import { TestBed } from '@angular/core/testing';

import { IsLoggedInGuardService } from './is-logged-in.guard.service';
import { CanActivateChildFn } from '@angular/router';

describe('IsLoggedInGuardService', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
    TestBed.runInInjectionContext(() => IsLoggedInGuardService(...guardParameters));

beforeEach(() => {
  TestBed.configureTestingModule({});
});

it('should be created', () => {
  expect(executeGuard).toBeTruthy();
});
});