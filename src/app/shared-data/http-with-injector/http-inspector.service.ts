import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';

import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../core/services/auth.service';
@Injectable()
export class HttpInspectorService implements HttpInterceptor {

    currentAuthToken=null;
    constructor(
        private storage: Storage
    ) {
        this.storage.get('currentUser').then((val) => {
            console.log('Your token', val);
            if (val) {
                this.currentAuthToken = val;
            }
        });
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
     
        if (this.currentAuthToken && this.currentAuthToken.token) {
            const headers = {
                'Authorization': `Bearer ${this.currentAuthToken.token}`,
            };
            if (request.responseType === 'json') {
                headers['Content-Type'] = 'application/json';
            }
            request = request.clone({
                setHeaders: headers
            });
        }

        return next.handle(request);
    }

}
