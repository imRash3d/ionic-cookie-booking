import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './shared-data/core/services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    // {
    //   title: 'My Orders',
    //   url: '/folder/Inbox',
    //   icon: 'checkbox-outline'
    // },
    // {
    //   title: 'Outbox',
    //   url: '/folder/Outbox',
    //   icon: 'paper-plane'
    // },
    // {
    //   title: 'Favorites',
    //   url: '/folder/Favorites',
    //   icon: 'heart'
    // },
    // {
    //   title: 'Archived',
    //   url: '/folder/Archived',
    //   icon: 'archive'
    // },
    // {
    //   title: 'Trash',
    //   url: '/folder/Trash',
    //   icon: 'trash'
    // },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  isLogin = false;
  displayName;
  isAdmin = false;
  userId;
  profileImg='https://img.pngio.com/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512.png';
  constructor(
    private authService: AuthenticationService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {

    this.authService.logout().then(res => {
      this.authService.loggedInuser.next(false);
      this.menu.close('first');
      this.router.navigateByUrl('/welcome')
    })
  }
  ngOnInit() {

    this.authService.loggedInuser.subscribe(resposne => {
      //  console.log('data', resposne)
      this.seDefaultSettings(resposne)
      
    })


    this.authService.getCurrentUser().then(resposne => {
      this.authService.loggedInuser.next(resposne)
      this.seDefaultSettings(resposne)
    })


    this.authService.reloadUser.subscribe(res => {
      if (res) {
        this.reloadUser();
      }
    })

    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }


  reloadUser() {

    this.authService.getuserDetail(this.userId).subscribe(res => {
    
      if (res.result) {
        if(res.data.ProfileImageUrl) {
        //  console.log(res)
          this.profileImg = res.data.ProfileImageUrl;
        }
       
        this.displayName = res.data.FirstName + ' ' + res.data.LastName;
      }
    })
  }

  seDefaultSettings(resposne) {
       
    if (resposne) {
  
      this.isLogin = true;
      if (!this.displayName) {
        this.displayName = resposne.DisplayName;
      }

      this.userId = resposne.UserId;
      if (resposne.Role === 'admin') {
        this.isAdmin = true;
      }

      this.reloadUser();

    } else {
      this.isLogin = false;
      this.isAdmin = false;
    }
    
  }

  editProfile() {
    this.router.navigateByUrl('auth/edit/profile/' + this.userId);
    this.menu.close('first')
  }
  changePassword() {
    this.router.navigateByUrl('auth/change-password/' + this.userId);
    this.menu.close('first')
  }

  navigate(url) {
    this.router.navigateByUrl(url);
    this.menu.close('first')
  }
}
