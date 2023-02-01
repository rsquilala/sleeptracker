import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarPage } from './tab-bar.page';

const routes: Routes = [
  {
    path: 'app',
    component: TabBarPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'sleep-timer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sleep-timer/sleep-timer.module').then(m => m.SleepTimerPageModule)
          }
        ]
      },
      {
        path: 'sleepiness',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sleepiness/sleepiness.module').then(m => m.SleepinessPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/sleep-timer',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/sleep-timer',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule {}
