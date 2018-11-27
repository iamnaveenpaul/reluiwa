import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { CroComponent } from './cro.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/chief-revenue-officer', pathMatch: 'full' },
    { path: 'chief-revenue-officer', component: CroComponent,
      data: { title: extract('Improve Sales Forecast, Productivity and Sales Reporting | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CroRoutingModule { }
