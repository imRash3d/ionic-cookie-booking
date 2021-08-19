import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

import { of, EMPTY, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";
import { HttpService } from '../../http-with-injector/http.service';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    loggedInuser = new BehaviorSubject(null)
    reloadUser = new BehaviorSubject(null)
    cookieOptions: any;
    API_URL = environment.API_URL;
    constructor(
        private storage: Storage,
        private http: HttpService,

        @Inject(PLATFORM_ID) public platform_id,
    ) {

    }

    login(data) {

        return this.http.post('user/login', data).pipe(tap(async (resposne: any) => {
            if (resposne.result) {
                //   console.log(resposne)
                const data = {
                    token: resposne.token
                }
                const decodedToken = jwt_decode(resposne.token);
                this.loggedInuser.next(decodedToken);
                await this.storage.set("currentUser", data);

                return ({ result: true, message: 'success' });

            } else {
                return ({ result: false, message: 'Login faild . Wrong email or password' });
            }
        }))


    }


    register(data) {

        return this.http.post('user/register', data).pipe(tap(async (resposne: any) => {
            if (resposne.result) {

                return ({ result: true, message: 'success' });

            } else {
                return ({ result: false, message: resposne.message });
            }
        }))


    }





    async logout() {
        await this.storage.remove("currentUser");
    }



    async getCurrentUser() {
        return this.storage.get('currentUser').then(resposne => {
            if(resposne){
                const decodedToken = jwt_decode(resposne.token);
                return decodedToken
            }
            return null;
          
        })



    }


    passwordResetRequest(email: string) {
        return of(true).pipe(
            delay(1000)
        );
    }

 

    passwordReset(email: string, token: string, password: string, confirmPassword: string): any {
        return of(true).pipe(
            delay(1000)
        );
    }


    getuserDetail(userId) {
        return this.http.get('user/' + userId);
    }

    changePassword(userId,data) {
        return this.http.post('user/changePassword/' + userId, data);
    }

    updateuserDetail(userId, userdata) {
        return this.http.post('user/' + userId, userdata);
    }
    sendMail(userdata) {
            return this.http.post('sendmail' , userdata);
    }
}
