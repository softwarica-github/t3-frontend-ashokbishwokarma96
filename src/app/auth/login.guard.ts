import {Injectable} from '@angular/core';
import {Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad} from '@angular/router';
import { AuthService } from '@dashboard/shared/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanLoad, CanActivate {

    constructor(private router: Router, private authService: AuthService) {
    }

    canLoad(route: Route): boolean {
        if (this.authService.isUserLoggedIn()) {
            this.router.navigateByUrl('/dashboard/buy');
            return false;
        }

        return true;
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isUserLoggedIn()) {
            this.router.navigateByUrl('/dashboard/buy/');
            return false;
        }

        return true;

    }

}