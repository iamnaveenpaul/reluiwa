import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { CrmComponent } from './crm.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/crm-for-distributors-and-partners', pathMatch: 'full' },
    { path: 'crm-for-distributors-and-partners', component: CrmComponent,
      data: { title: extract('CRM | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CrmForDistributorsRoutingModule { }
