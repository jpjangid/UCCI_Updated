import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonClass } from './common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  localStorage:any;
  constructor(private commonFunction : CommonClass, private route : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole = route.data.route;
    console.log(expectedRole);
    this.localStorage = this.commonFunction.getLocalStorage();
    if(this.localStorage) {
      console.log(this.localStorage)
      return true;
    }
    else {
      this.route.navigateByUrl('');
      return false;
    }
  }
  
}
