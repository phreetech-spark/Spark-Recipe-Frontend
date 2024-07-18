import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const data = localStorage.getItem("loggedinuser");
  const router = inject(Router);
  if (!!data){
    return true;
  }
  router.navigate(["/auth/login"])
  return false;
};
