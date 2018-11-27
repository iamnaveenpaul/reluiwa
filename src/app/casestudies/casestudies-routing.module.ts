import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import {CasestudiesComponent} from './casestudies.component';

const routes: Routes = [
  Route.withShell([
    // { path: '', redirectTo: '/case-studies', pathMatch: 'full' },
    { path: 'case-studies', component: CasestudiesComponent, data: { title: extract('Case Studies | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CasestudiesRoutingModule { }
