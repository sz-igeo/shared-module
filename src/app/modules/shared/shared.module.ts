import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import {
  FormCheckboxInputComponent,
  FormMultiInputComponent,
  PageJumpPanelComponent
} from './components';

import { CheckboxInputValidator, PasswordsValidator } from './validators';

const COMPONENTS = [
  FormCheckboxInputComponent,
  FormMultiInputComponent,
  PageJumpPanelComponent
];
const VALIDATORS = [CheckboxInputValidator, PasswordsValidator];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [
        // BaThemeConfigProvider,
        // BaThemeConfig,
        ...VALIDATORS
        // ...NGA_SERVICES
      ]
    };
  }
}
