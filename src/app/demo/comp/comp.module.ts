import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from '../../modules/shared/shared.module';

import { CompRoutingModule } from './comp.routing.module';
import { CompComponent } from './comp.component';
import { PageJumpPanelDemoComponent } from './page-jump-panel/page-jump-panel-demo.component';
import { InfiniteScrollListComponent } from './infinite-scroll-list/infinite-scroll-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CompRoutingModule,
    NgZorroAntdModule,
    SharedModule
  ],
  declarations: [
    CompComponent,
    PageJumpPanelDemoComponent,
    InfiniteScrollListComponent
  ]
})
export class CompModule {}
