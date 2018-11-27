import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { SalesRepComponent } from './salesRep.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/sales-rep', pathMatch: 'full' },
    { path: 'sales-rep', component: SalesRepComponent,
      data: { title: extract('Increase Sales Reps Productivity | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SalesRepRoutingModule { }
