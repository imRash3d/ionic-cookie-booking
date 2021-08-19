import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared-data/core/services/auth.service';
import { CommonService } from '../../shared-data/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
@Output() OnSingUpClick = new EventEmitter();
loader = false ;
  postData = {
    username: '',
    password: ''
  };

  loginFOrm :FormGroup
  constructor(
    private commonServie:CommonService,
    private fb:FormBuilder,
    private router: Router,
     private authService: AuthenticationService,
    // private storageService: StorageService
  ) { 
    this.loginFOrm = this.fb.group({
      Email:['', Validators.required],
      Password:['',Validators.required]
    })
  }

  ngOnInit() {
 
   }

  validateInputs() {
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    return (
      this.postData.username &&
      this.postData.password &&
      username.length > 0 &&
      password.length > 0
    );
  }

  login() {
    this.loader = true;
    const dataModel = {
      Email:this.loginFOrm.value.Email.trim(),
      Password:this.loginFOrm.value.Password.trim(),
    }
    this.authService.login(dataModel).subscribe(response => {
      this.loader = false; 
      console.log(response)
      if(!response.result){
        this.commonServie.showMessage({message:"Login Failed !! Email or password don't match "}).then(r=> {

        })
      }else {
        this.router.navigate(['home']);
      }
    },err=> {
      this.commonServie.showMessage({message:err}).then(r=> {

      })
    })
  }
  loginAction() {
    //     if (this.validateInputs()) {
    //  //   this.authService.login(this.postData).subscribe(
    //     (res: any) => {
    //     if (res.userData) {
    //     // Storing the User data.
    //     this.storageService.store(AuthConstants.AUTH, res.userData);
    //     this.router.navigate(['home/feed']);
    //     } else {
    //     console.log('incorrect password.');
    //     }
    //     },
    //     (error: any) => {
    //     console.log('Network Issue.');
    //     }
    //     );
    //     } else {
    //     console.log('Please enter email/username or password.');
    //     }
  }
}
