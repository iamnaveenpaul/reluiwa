import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { SalesAiComponent } from './resources.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/sales-resources', pathMatch: 'full' },
    { path: 'sales-resources', component: SalesAiComponent,
      data: { title: extract('Sales Resources | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ResourcesRoutingModule { }
