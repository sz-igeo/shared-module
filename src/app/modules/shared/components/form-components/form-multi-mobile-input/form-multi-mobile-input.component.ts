import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS
} from '@angular/forms';

import { FormMultiInputComponent } from '../form-multi-input/form-multi-input.component';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormMultiMobileInputComponent),
  multi: true
};

export const validateCounterRange: ValidatorFn = (
  control: AbstractControl
): ValidationErrors => {
  const validItems = control.value && control.value.filter(item => item.value);

  if (!validItems || validItems.length <= 0) {
    return { required: true };
  } else if (validItems) {
    const mobileRegex: RegExp = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
    const invalids = control.value.filter(
      item => !mobileRegex.test(item.value)
    );

    return invalids.length > 0 ? {'invalid-mobile-pattern': true} : null;
  }

  return null;
};

export const EXE_COUNTER_VALIDATOR = {
  provide: NG_VALIDATORS,
  useValue: validateCounterRange,
  multi: true
};

@Component({
  selector: 'app-form-multi-mobile-input',
  templateUrl: '../form-multi-input/form-multi-input.component.html',
  styleUrls: ['../form-multi-input/form-multi-input.component.scss'],
  providers: [EXE_COUNTER_VALUE_ACCESSOR, EXE_COUNTER_VALIDATOR]
})
export class FormMultiMobileInputComponent extends FormMultiInputComponent
  implements OnInit, ControlValueAccessor {
  constructor() {
    super();
  }

  ngOnInit() {}
}
