import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { FaqComponent } from './faq.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/faq', pathMatch: 'full' },
    { path: 'faq', component: FaqComponent,
      data: { title: extract('Sales Forecasting and Execution Platform Demo | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FaqRoutingModule { }
