import { Injectable } from '@angular/core';
import { CanActivate ,CanLoad,Route, UrlSegment, Router, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanLoad {

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
canLoad(
    route: Route, 
    segments: UrlSegment[]
  )
  :boolean{
    if(this.isAuthenticated){
      return true;
    }else{
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

