import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { TermsComponent } from './terms.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/terms', pathMatch: 'full' },
    { path: 'terms', component: TermsComponent,
      data: { title: extract('Sales Forecasting and Execution Platform Demo | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TermsRoutingModule { }
