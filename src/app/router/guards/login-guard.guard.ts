import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const router= inject(Router)
   const token = window.localStorage.getItem('token');
    if(token){
      return true;
    }else{
      router.navigate(['./login']);
      return false
    }
};


//para crearlo apartir de servicios debo llamar @injectable
@Injectable({
  providedIn:'root'
})
export class LoginGuardGuard implements CanActivate{

  constructor(private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const token = window.localStorage.getItem('token');
    if(token){
      return true;
    }else{
      this.router.navigate(['./login']);
      return false
    }
  } 
}