import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { OpportunityComponent } from './opportunity.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/opportunity', pathMatch: 'full' },
    { path: 'opportunity', component: OpportunityComponent,
      data: { title: extract('Sales Opportunity Management | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OpportunityRoutingModule { }
