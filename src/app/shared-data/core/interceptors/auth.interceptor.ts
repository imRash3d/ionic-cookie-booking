import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { AuthenticationService } from '../services/auth.service';

import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private storage: Storage,
        private authService: AuthenticationService,
        private router: Router,
   
        ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
        return next.handle(req) as any;

        // return this.storage.get('currentUser').then((val) => {
        //     console.log('Your token', val);
        //     const current_user = val;

        //     if (current_user) {
        //         const authReq = req.clone({
        //             headers: req.headers.set('Authorization', 'Bearer ' + current_user.token),
        //         });
        //         // send the newly created request
        //         return next.handle(authReq) as any;
        //     } else {

        //         // send the newly created request
        //         return next.handle(req) as any;
        //     }




        // });


    }
}
