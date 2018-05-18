import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'comp',
  //   pathMatch: 'full'
  // },
  {
    path: 'comp',
    loadChildren: './demo/comp/comp.module#CompModule'
  },
  {
    path: 'form',
    loadChildren: './demo/form/form.module#FormModule'
  },
  {
    path: 'pipe',
    loadChildren: './demo/pipe/pipe.module#PipeModule'
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
