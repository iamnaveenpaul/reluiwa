import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ForecastComponent } from './forecast.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/sales-forecast', pathMatch: 'full' },
    { path: 'sales-forecast', component: ForecastComponent,
      data: { title: extract('Sales Forecast Management | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ForecastRoutingModule { }
