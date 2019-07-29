import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import {ThankYouComponent} from './thank-you.component';

const routes: Routes = [
  Route.withShell([
    { path: 'thank-you', component: ThankYouComponent, data: { title: extract('Thank You | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ThankYouRoutingModule { }
