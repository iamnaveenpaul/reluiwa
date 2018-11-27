import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { PricingComponent } from './pricing.component';

const routes: Routes = [
  Route.withShell([
    { path: 'pricing', component: PricingComponent, data: { title: extract('Pricing | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PricingRoutingModule { }
