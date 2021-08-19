import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared-data/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/shared-data/core/services/auth.service';

@Component({
  selector: 'app-app-change-password',
  templateUrl: './app-change-password.page.html',
  styleUrls: ['./app-change-password.page.scss'],
})
export class AppChangePasswordPage implements OnInit {
  userForm: FormGroup;
  loader = false;
  userId;
  editImgUrl;
  constructor(
    private commonService: CommonService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
  ) {
    this.userForm = this.fb.group({
      OldPassword: ['', Validators.required,],
      NewPassword: ['', Validators.required,],

    })
  }

  ngOnInit() {
    console.log(this.route.snapshot.params)
    this.userId = this.route.snapshot.params.userId;
  }
  saveData() {

    if (this.userForm.valid) {
      this.loader = true;

      this.loader = true;
      this.authenticationService
        .changePassword(this.userId, this.userForm.value).subscribe((resposne: any) => {
          this.loader = false;
          if (resposne.result) {
            this.commonService.showMessage({ message: resposne.message })
            this.userForm.reset();
          } else {
            this.commonService.showMessage({ message: 'Password updated failed . Old password dont match' })
          }
        },
          error => {
            this.commonService.showMessage({ message: 'Some thing wrong !! Failed to update password' })

          }
        );
    }

  }
}
