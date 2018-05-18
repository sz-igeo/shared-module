import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../modules/shared/shared.module';

import { CompRoutingModule } from './comp.routing.module';
import { CompComponent } from './comp.component';
import { PageJumpPanelDemoComponent } from './page-jump-panel/page-jump-panel-demo.component';

@NgModule({
  imports: [CommonModule, CompRoutingModule, SharedModule],
  declarations: [CompComponent,
    PageJumpPanelDemoComponent
]
})
export class CompModule {}
