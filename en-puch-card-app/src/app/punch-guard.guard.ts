import { CanActivateChildFn } from '@angular/router';

export const punchGuardGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
