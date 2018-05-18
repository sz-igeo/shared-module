import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { CheckboxGroupValidator, MultiInputValidator, PasswordsValidator, StringValidator } from '../../modules/shared/validators';

@Component({
  selector: 'cmss-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  validateForm: FormGroup;

  authenticationList = [
    { label: '阅读', value: 'reading' },
    { label: '写作', value: 'writing' },
    { label: '跳舞', value: 'dancing' },
    { label: '绘画', value: 'drawing' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [
        null,
        [
          Validators.required,
          PasswordsValidator.equals('password', 'checkPassword')
        ]
      ],
      favourite: [this.authenticationList, [CheckboxGroupValidator.required()]],
      phones: [null, [MultiInputValidator.required(), , MultiInputValidator.isPhonePattern()]],
      article: ['asdfad', [StringValidator.hasNoControlChar()]],
      url: ['http://www.qq.com', [StringValidator.isUrlPattern()]]
    });
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  submitForm(): void {
    for (const field of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[field].markAsDirty();
      this.validateForm.controls[field].updateValueAndValidity();
    }
  }
}
