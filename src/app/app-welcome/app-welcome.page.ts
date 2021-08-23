import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-welcome',
  templateUrl: './app-welcome.page.html',
  styleUrls: ['./app-welcome.page.scss'],
})
export class AppWelcomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goHome() {
    this.router.navigateByUrl('/auth')
  }
}
