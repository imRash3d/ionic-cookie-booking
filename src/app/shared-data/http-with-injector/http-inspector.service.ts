import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';

import { Storage } from '@ionic/storage';
import { map, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../core/services/auth.service';
@Injectable()
export class HttpInspectorService implements HttpInterceptor {

    currentAuthToken = null;
    constructor(
        private storage: Storage,
        private authService: AuthenticationService
    ) {
        this.storage.get('currentUser').then((val) => {
            if (val) {
                this.currentAuthToken = val;
                console.log(this.currentAuthToken)
            }
        });
    }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // YOU CAN ALSO DO THIS
        // const token = this.authenticationService.getToke()

        return from(this.storage.get('currentUser'))
            .pipe(
                switchMap(currentUser => {
                    if (currentUser && currentUser.token) {
                        this.authService.currentUser = currentUser;
                        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + currentUser.token) });
                    }

                    if (!request.headers.has('Content-Type')) {
                        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                    }



                    return next.handle(request).pipe(
                        map((event: HttpEvent<any>) => {
                            if (event instanceof HttpResponse) {
                                // do nothing for now
                            }
                            return event;
                        }),

                    );
                })
            );


    }




}
