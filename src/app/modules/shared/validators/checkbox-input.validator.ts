import { FormControl, FormGroup } from '@angular/forms';

export class CheckboxInputValidator {
  public static required() {
    return (control: FormControl): { [s: string]: boolean } => {
      const checkedItems = control.value.filter(r => r.checked);
      return checkedItems.length > 0 ? null : { required: true, error: true };
    };
  }
}
