import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Storage } from '@ionic/storage';
@Injectable()
export class HttpInspectorService implements HttpInterceptor {

    constructor(
        private storage: Storage,
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

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
