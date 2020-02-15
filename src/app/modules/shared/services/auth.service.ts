import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

    private controller = "/users";
    private action = "/logout";

    constructor(
        private router: Router,
        private http: HttpClient,
    ) {
    }

    private messages = new BehaviorSubject('');

    messageSource = this.messages.asObservable();

    setMessage(message: string) {
        this.messages.next(message);
    }

  

    /**
     * Check if user is logged in or not
     *
     * @returns {boolean}
     */
    isUserLoggedIn(): boolean {
        let accessToken = localStorage.getItem("username");
        if (accessToken) {
                return true;
        }
        return false;
    }

    /**
     * Logout a user
     *
     * @return void
     */
    logoutUser() {
                this.sessionDestroy();
    }


    sessionDestroy() {
        let accessToken = localStorage.getItem("username");
        if (accessToken) {
            localStorage.removeItem("username");
        }
        this.router.navigateByUrl('/login');

    }

}