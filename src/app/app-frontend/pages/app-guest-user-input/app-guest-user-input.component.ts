import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-app-guest-user-input',
  templateUrl: './app-guest-user-input.component.html',
  styleUrls: ['./app-guest-user-input.component.scss'],
})
export class AppGuestUserInputComponent implements OnInit {
  form: any; //Declare the form object to be bound to your html
  loader = false ;
  userForm: FormGroup;
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
  ) {
    this.userForm = this.fb.group({
      FirstName: ['', Validators.required,],
      UserId: [null],
      LastName: ['', Validators.required,],
      Email: ['', [Validators.compose([Validators.required, Validators.email])]],

    })
  }

  ngOnInit() {


  }

  async back(){
    await this.modalController.dismiss(null);
  }
  async closeModal() {
    console.log(this.userForm.value)
    // const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(this.userForm.value);
  }
}
