import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-app-welcome',
  templateUrl: './app-welcome.page.html',
  styleUrls: ['./app-welcome.page.scss'],
})
export class AppWelcomePage implements OnInit {
  isUserLoggedIn = null;
  constructor(
    private router: Router,
    private storage: Storage
  ) {
    this.storage.get('currentUser').then((val) => {
      if (val) {
        this.isUserLoggedIn = val;
      }
    });
  }

  ngOnInit() {
  }
  goHome() {
    if (this.isUserLoggedIn) {
      this.router.navigateByUrl('/home')
    } else {
      this.router.navigateByUrl('/auth')
    }

  }
}
