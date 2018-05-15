import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmss-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // this.validateForm = this.fb.group({
    //   email: [null, [Validators.email]],
    //   password         : [ null, [ Validators.required ] ],
    //   checkPassword    : [ null, [ Validators.required, EqualPasswordsValidator.validate('password', 'checkPassword') ] ],
    //   nickname: [null, [Validators.required]],
    //   phoneNumberPrefix: ['+86'],
    //   phoneNumber: [null, [Validators.required]],
    //   website: [null, [Validators.required]],
    //   captcha: [null, [Validators.required]],
    //   agree: [false]
    // });
  }


}
