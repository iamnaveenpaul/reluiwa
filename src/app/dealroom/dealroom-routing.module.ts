import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { DealroomComponent } from './dealroom.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/dealroom', pathMatch: 'full' },
    { path: 'dealroom', component: DealroomComponent,
      data: { title: extract('Deal Room | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DealroomRoutingModule { }
