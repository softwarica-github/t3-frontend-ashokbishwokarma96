import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { AlertMessageService } from '@dashboard/shared/services/alert-message.service';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {


    constructor(private router: Router, private alertService: AlertMessageService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       
        if (localStorage.getItem('admin') == next.data.role) {
            return true;
        }

        // navigate after not found
        this.alertService.show({
            message: "You don't have permission",
            alertType: "danger"
        });
        // this.router.navigate(['/']);
        return false;
    }

}