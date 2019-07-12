import {
    CanActivate, ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})



export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private loginservice: LoginService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.loginservice.isLoggedin) {
            // if we return true user is allowed to access that route
            return true;
        } else {
            // if we return false user is not allowed to access
            return false;
        }
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

}
