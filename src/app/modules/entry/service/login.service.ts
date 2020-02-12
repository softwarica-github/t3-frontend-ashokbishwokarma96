import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { AuthService } from '@dashboard/shared/services/auth.service';


@Injectable()
export class LoginService {
    private mainURL = "http://localhost:3000";
    private controller = "/users";
    private action = "/login";
    private actionSignup = "/signups";

    private messages = new BehaviorSubject('');

    messageSource = this.messages.asObservable();

    constructor(private http: HttpClient, private authService: AuthService) {
    }

    setMessage(message: string) {
        this.messages.next(message);
    }

    login(data) {
        return this.http.post(this.mainURL + this.controller + this.action, data).pipe(
            map((data: any) => {
                    localStorage.setItem("username", data.token);
                    localStorage.setItem("admin", data.admin);
                    localStorage.setItem("email", data.email);
                return data;
            })
        );
    }

    register(data) {
        return this.http.post(this.mainURL + this.controller + this.actionSignup, data).pipe(
            map((data: any) => {
                    localStorage.setItem("username", data.token);
                    localStorage.setItem("admin", data.admin);
                    localStorage.setItem("email", data.email);
                return data;
            })
        );
    }
}
