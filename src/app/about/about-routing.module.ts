import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { AboutComponent } from './about.component';

const routes: Routes = [
  Route.withShell([
    { path: 'company', component: AboutComponent, data: { title: extract('Company') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
