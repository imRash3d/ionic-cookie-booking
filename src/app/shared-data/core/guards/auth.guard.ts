import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {


    currentAuthToken = null;
    constructor(
        private router: Router,
        private storage: Storage,
        private auth: AuthenticationService
    ) {

    }

    canActivate() {

        if (this.auth.currentUser) {
            return true
        } else {
            this.router.navigate(['/auth']);
            return true;
        }

    }

}
