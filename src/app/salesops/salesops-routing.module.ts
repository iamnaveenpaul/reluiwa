import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { SalesopsComponent } from './salesops.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/sales-operations-manager', pathMatch: 'full' },
    { path: 'sales-operations-manager', component: SalesopsComponent,
      data: { title: extract('Improve Sales Forecast, Productivity and Sales Reporting | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SalesopsRoutingModule { }
