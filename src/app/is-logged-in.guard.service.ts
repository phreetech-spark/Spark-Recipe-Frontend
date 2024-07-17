import { Injectable, inject } from '@angular/core';
import { CanActivateChildFn,Router } from '@angular/router';


export const IsLoggedInGuardService:CanActivateChildFn = (routes, state)=> {
  const data = localStorage.getItem("loggedinuser");
  const router = inject(Router);
  if (!!data){
    return true;
  }
  router.navigate(["/auth/login"])
  return false;
}
