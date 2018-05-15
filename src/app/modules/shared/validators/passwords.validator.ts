import { FormControl, FormGroup } from '@angular/forms';

export class PasswordsValidator {
  public static equals(firstField, secondField) {
    return (control: FormControl): { [s: string]: boolean } => {
      const formGroup: FormGroup = <FormGroup>control.parent;
      if (formGroup) {
        return formGroup.controls[firstField].value ===
          formGroup.controls[secondField].value
          ? null
          : { passwordsEqual: true, error: true };
      }
    };
  }
}
