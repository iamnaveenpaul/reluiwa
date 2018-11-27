import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { PrivacyComponent } from './privacy.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/privacy', pathMatch: 'full' },
    { path: 'privacy', component: PrivacyComponent,
      data: { title: extract('Privacy Policy | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PrivacyRoutingModule { }
