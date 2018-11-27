import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { SecurityComponent } from './security.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/security', pathMatch: 'full' },
    { path: 'security', component: SecurityComponent,
      data: { title: extract('Security | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SecurityRoutingModule { }
