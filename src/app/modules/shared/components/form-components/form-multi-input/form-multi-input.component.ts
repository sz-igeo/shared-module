import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormMultiInputComponent),
  multi: true
};

@Component({
  selector: 'cmss-form-multi-input',
  templateUrl: './form-multi-input.component.html',
  styleUrls: ['./form-multi-input.component.scss'],
  providers: [EXE_COUNTER_VALUE_ACCESSOR]
})
export class FormMultiInputComponent implements OnInit, ControlValueAccessor {
  @Input() inputWidth: number;
  @Input() size: 'small' | 'default' | 'large' = 'default';

  private _inputs: Array<any> = [{ value: null }];
  get inputs() {
    return this._inputs;
  }

  set inputs(value: Array<any>) {
    this._inputs = value;
    this.propagateChange(this._inputs);
  }

  constructor() {}

  ngOnInit() {}

  propagateChange = (_: any) => {};

  writeValue(value: Array<any>) {
    if (value) {
      this.inputs = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {}

  inputChange() {
    this.propagateChange(this.inputs);
  }

  addInput() {
    this.inputs = [...this.inputs, { value: null }];
  }

  deleteInput(input, index) {
    this.inputs = this.inputs.filter(item => item !== this.inputs[index]);
  }
}
