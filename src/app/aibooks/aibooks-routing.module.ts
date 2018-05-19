import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { AibooksComponent } from './aibooks.component';

const routes: Routes = [
  Route.withShell([
    { path: 'ai-for-sales', component: AibooksComponent, data: { title: extract('AI for Sales | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AibooksRoutingModule { }
