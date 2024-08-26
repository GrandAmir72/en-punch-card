import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { punchGuardGuard } from './punch-guard.guard';

describe('punchGuardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => punchGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
