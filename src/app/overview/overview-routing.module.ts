import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { OverviewComponent } from './overview.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/sales-tools', pathMatch: 'full' },
    { path: 'sales-tools', component: OverviewComponent,
      data: { title: extract('Overview | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OverviewRoutingModule { }
