import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import {
  FormCheckboxGroupComponent,
  FormMultiInputComponent,
  PageJumpPanelComponent,
} from './components';
import { ImgsRootPathPipe } from './pipes';
import {
  CheckboxGroupValidator,
  MultiInputValidator,
  PasswordsValidator,
  StringValidator
} from './validators';

const COMPONENTS = [
  FormCheckboxGroupComponent,
  FormMultiInputComponent,
  PageJumpPanelComponent,
];
const PIPES = [ImgsRootPathPipe];
const VALIDATORS = [
  CheckboxGroupValidator,
  MultiInputValidator,
  PasswordsValidator,
  StringValidator
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [...COMPONENTS,  ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
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
