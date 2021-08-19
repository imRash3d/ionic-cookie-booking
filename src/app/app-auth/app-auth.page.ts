import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-auth',
  templateUrl: './app-auth.page.html',
  styleUrls: ['./app-auth.page.scss'],
})
export class AppAuthPage implements OnInit {
  isShowSignUp = false;
  isShowlogin = true;
  constructor() { }

  ngOnInit() {
  }
  showSignUp() {
    this.isShowlogin = false;
    this.isShowSignUp = true;

  }
  showLogin() {
    this.isShowlogin = true;
    this.isShowSignUp = false;

  }
}
