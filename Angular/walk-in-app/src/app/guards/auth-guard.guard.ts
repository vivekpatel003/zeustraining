import { CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router:Router  = Inject(Router);
  const protectedRoutes:string[] = ['/dashBoard','/cardDetail/1','/cardDetail/2','/cardDetail/3','/hallTicket']
  const sessionData = sessionStorage.getItem('login');
  return protectedRoutes.includes(state.url) && (sessionData==null) ? router.navigate(['/']) : true;

};
