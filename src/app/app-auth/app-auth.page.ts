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
  bg:string='../../assets/sign-in.jpg';
  ngOnInit() {
  }
  showSignUp() {
    this.bg = '../../assets/sign-up.jpg';
    this.isShowlogin = false;
    this.isShowSignUp = true;

  }
  showLogin() {
    this.bg = '../../assets/sign-in.jpg';
    this.isShowlogin = true;
    this.isShowSignUp = false;

  }
}
