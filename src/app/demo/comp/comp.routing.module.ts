import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompComponent } from './comp.component';
import { PageJumpPanelDemoComponent } from './page-jump-panel/page-jump-panel-demo.component';
import { InfiniteScrollListComponent } from './infinite-scroll-list/infinite-scroll-list.component';

const routes: Routes = [
  {
    path: '',
    component: CompComponent,
    children: [
      {
        path: '',
        redirectTo: 'infinitescroll',
        pathMatch: 'full'
      },
      {
        path: 'pagejumppanel',
        component: PageJumpPanelDemoComponent
      },
      {
        path: 'infinitescroll',
        component: InfiniteScrollListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompRoutingModule {}
