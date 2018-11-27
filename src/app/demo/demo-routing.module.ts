import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/demo', pathMatch: 'full' },
    { path: 'demo', component: DemoComponent,
      data: { title: extract('Demo | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DemoRoutingModule { }
