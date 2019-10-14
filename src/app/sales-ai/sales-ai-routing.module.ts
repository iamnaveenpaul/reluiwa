import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { SalesAiComponent } from './sales-ai.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/sales-ai', pathMatch: 'full' },
    { path: 'sales-ai', component: SalesAiComponent,
      data: { title: extract('Sales AI CRM | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SalesAiRoutingModule { }
