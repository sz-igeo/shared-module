import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from '../../modules/shared/shared.module';

import { FormRoutingModule } from './form.routing.module';

import { FormComponent } from './form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormRoutingModule,

    SharedModule,
  ],
  declarations: [FormComponent]
})
export class FormModule {}
