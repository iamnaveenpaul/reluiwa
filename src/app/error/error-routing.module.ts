import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ErrorComponent } from './error.component';

const routes: Routes = [
  Route.withShell([
    { path: '404', component: ErrorComponent, data: { title: extract('Sales Intelligence Company | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ErrorRoutingModule { }
