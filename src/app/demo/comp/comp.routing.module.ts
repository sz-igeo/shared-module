import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompComponent } from './comp.component';
import { PageJumpPanelDemoComponent } from './page-jump-panel/page-jump-panel-demo.component';

const routes: Routes = [
  {
    path: '',
    component: CompComponent,
    children: [
      {
        path: '',
        redirectTo: 'pagejumppanel',
        pathMatch: 'full'
      },
      {
        path: 'pagejumppanel',
        component: PageJumpPanelDemoComponent
      },
      {
        path: 'test',
        component: PageJumpPanelDemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompRoutingModule {}
