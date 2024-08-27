import { Injectable } from '@angular/core';
import { CanActivate ,CanMatch,Route, UrlSegment, Router, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanMatch {

  private isAuthenticated = false;

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean{
    if(this.isAuthenticated){
      return true;
    }else{
      this.router.navigate(['/home']);
      return false;
    }
  }
  canMatch(
    route: Route, 
    segments: UrlSegment[]
  )
  :boolean{
    const isFirstSegmentLogin = segments.length > 0 && segments[0].path === 'login';
    
    if (this.isAuthenticated) {
      return true;
    } else if (isFirstSegmentLogin) {
      return true; // Allow matching if the first segment is 'login'
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
    
  login(){
    this.isAuthenticated = true;
  }

  logout(){
    this.isAuthenticated = false;
  }
  }

