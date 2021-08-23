import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared-data/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/shared-data/core/services/auth.service';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.page.html',
  styleUrls: ['./app-profile.page.scss'],
})
export class AppProfilePage implements OnInit {
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
      FirstName: ['', Validators.required,],
      LastName: ['', Validators.required,],
      Mobile: ['', Validators.required,],
      ProfileImageUrl:[''],
      Address:['']
    })
  }
  onUploadImageUrl(e) {
    if (e) {
      this.userForm.get('ProfileImageUrl').setValue(e)
    }
  }
  ngOnInit() {
    console.log(this.route.snapshot.params)
    this.userId = this.route.snapshot.params.userId;
    this.authenticationService.getuserDetail(this.route.snapshot.params.userId).subscribe(res => {
      console.log(res)
      if (res.Success) {
        if(res.Result.ProfileImageUrl) {
          this.editImgUrl = res.Result.ProfileImageUrl;
        }
        this.userForm.patchValue(res.Result)
      }
    })
  }
  saveData() {

    if (this.userForm.valid) {
      this.loader = true;
      const dataModel = {
        FirstName: this.userForm.value.FirstName.trim(),
        LastName: this.userForm.value.LastName.trim(),
        Mobile: this.userForm.value.Mobile.trim(),
        ProfileImageUrl: this.userForm.value.ProfileImageUrl.trim(),
        Dob: '2020-09-19 13:27:39',
        Address:this.userForm.value.Address
      };
      console.log(dataModel)
      this.loader = true;
      this.authenticationService
        .updateuserDetail(this.userId, dataModel).subscribe((resposne: any) => {
          this.loader = false;
    
          if (resposne.result) {
            this.commonService.showMessage({ message: resposne.message })
            this.authenticationService.reloadUser.next(true);
         
          } else {
            this.commonService.showMessage({ message: resposne.message })
          }
        },
          error => {
            this.commonService.showMessage({ message: 'Some thing wrong !! Failed to update user' })

          }
        );
    }

  }
}
