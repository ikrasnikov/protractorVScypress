import { Routes } from '@angular/router';

import { DeepComponentComponent } from './deep-component/deep-component.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'some-deep-page',
    component: DeepComponentComponent,
  },
  {
    path: '**',
    redirectTo: 'main',
  }
];
