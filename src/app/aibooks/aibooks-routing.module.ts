import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { AibooksComponent } from './aibooks.component';

const routes: Routes = [
  Route.withShell([
    { path: 'sales-ai', component: AibooksComponent, data: { title: extract('Sales AI | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AibooksRoutingModule { }
