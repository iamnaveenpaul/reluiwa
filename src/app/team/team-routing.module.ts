import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { TeamComponent } from './team.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/team-management', pathMatch: 'full' },
    { path: 'team-management', component: TeamComponent,
      data: { title: extract('Sales Team Management | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TeamRoutingModule { }
