import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { SalesAiComponent } from './sales-analytics.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/sales-analytics', pathMatch: 'full' },
    { path: 'sales-analytics', component: SalesAiComponent,
      data: { title: extract('Sales Analytics | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SalesAnalyticsRoutingModule { }
