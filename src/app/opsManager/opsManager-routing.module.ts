import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { OpsManagerComponent } from './opsManager.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/sales-operations', pathMatch: 'full' },
    { path: 'sales-operations', component: OpsManagerComponent,
      data: { title: extract('Sales Operations Management | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OpsManagerRoutingModule { }
