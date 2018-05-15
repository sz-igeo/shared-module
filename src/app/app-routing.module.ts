import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form',
    loadChildren: './demo/form/form.module#FormModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
