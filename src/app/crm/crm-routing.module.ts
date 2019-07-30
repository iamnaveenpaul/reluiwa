import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { CrmComponent } from './crm.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/crm-for-distributors', pathMatch: 'full' },
    { path: 'crm-for-distributors', component: CrmComponent,
      data: { title: extract('CRM for Distributors | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CrmRoutingModule { }
