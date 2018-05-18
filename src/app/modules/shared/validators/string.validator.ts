import { FormControl } from '@angular/forms';

export class StringValidator {
  public static hasNoControlChar() {
    return (control: FormControl): { [s: string]: boolean } => {
      const regex: RegExp = /^(?!.*[\b|\t])/;
      const valid = regex.test(control.value);

      return valid ? null : { 'has-no-control-char': true, error: true };
    };
  }

  public static isUrlPattern() {
    return (control: FormControl): { [s: string]: boolean } => {
        const regex: RegExp = /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\/%=~_|]/;
        const valid = regex.test(control.value);

        return valid ? null : { 'is-url-pattern': true, error: true };
      };
  }
}
