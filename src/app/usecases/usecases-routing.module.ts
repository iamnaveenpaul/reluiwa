import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import {UsecasesComponent} from './usecases.component';

const routes: Routes = [
  Route.withShell([
    // { path: '', redirectTo: '/use-cases', pathMatch: 'full' },
    { path: 'use-cases', component: UsecasesComponent, data: { title: extract('Use Cases') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UsecasesRoutingModule { }
