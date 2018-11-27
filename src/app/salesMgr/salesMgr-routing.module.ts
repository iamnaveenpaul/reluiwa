import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { SalesMgrComponent } from './salesMgr.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/sales-manager', pathMatch: 'full' },
    { path: 'sales-manager', component: SalesMgrComponent,
      data: { title: extract('Real-time Pipeline Visibility for Sales Managers | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SalesMgrRoutingModule { }
