import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const EXE_CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormCheckboxInputComponent),
  multi: true
};

@Component({
  selector: 'cmss-form-checkbox-input',
  templateUrl: './form-checkbox-input.component.html',
  styleUrls: ['./form-checkbox-input.component.scss'],
  providers: [EXE_CHECKBOX_VALUE_ACCESSOR]
})
export class FormCheckboxInputComponent implements ControlValueAccessor {
  @Input() isReadOnly: boolean;

  _items: Array<any>;
  get items() {
    return this._items;
  }
  set items(value: Array<any>) {
    this._items = value;
    this.propagateChange(this._items);
  }

  constructor() {}

  propagateChange = (_: any) => {};

  writeValue(value: any) {
    if (value) {
      this.items = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {}

  clickItem(e, item) {
    const checkbox = e.target;

    if (checkbox.checked) {
      item.checked = true;
    } else {
      item.checked = false;
    }

    this.propagateChange(this.items);
  }

  isCheck(item) {
    return item.checked;
  }
}
