import { FormControl } from '@angular/forms';

export class MultiInputValidator {
  public static required() {
    return (control: FormControl): { [s: string]: boolean } => {
      const inputItems = control.value && control.value.filter(r => r.value);
      return !inputItems || inputItems.length > 0
        ? null
        : { required: true, error: true };
    };
  }

  public static isPhonePattern() {
    return (control: FormControl): { [s: string]: boolean } => {
      const inputItems = control.value && control.value.filter(r => r.value);

      if (inputItems) {
        const mobileRegex: RegExp = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
        const invalids = control.value.filter(
          item => !mobileRegex.test(item.value)
        );

        return invalids.length <= 0
          ? null
          : { 'is-phone-pattern': true, error: true };
      }
    };
  }
}
