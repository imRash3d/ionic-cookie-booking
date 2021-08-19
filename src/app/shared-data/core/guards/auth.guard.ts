import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';
import { CommonService } from '../../services/common.service';



@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private commonService: CommonService,

        private authService: AuthenticationService) { }

    canActivate() {
        // const token = this.authService.getToken();

        // if (token) {

        //     if (token) {
        //         return true;
        //     } else {
        //         this.commonService.showMessage({ message: 'Your session has expired' });
        //         this.router.navigate(['auth/login']);
        //         return false;
        //     }
        // }

        // this.router.navigate(['auth/login']);
        return true;
    }

}
