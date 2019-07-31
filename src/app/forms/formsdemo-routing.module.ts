import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import {FormsdemoComponent} from './formsdemo.component';

const routes: Routes = [
  Route.withShell([
    { path: 'forms/sales-forecast', component: FormsdemoComponent, data: { title: extract('Forms | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsdemoRoutingModule { }
