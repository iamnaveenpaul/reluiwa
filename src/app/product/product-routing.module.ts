import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ProductComponent } from './product.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/product', pathMatch: 'full' },
    { path: 'product', component: ProductComponent,
      data: { title: extract('Sales Forecasting and Execution Platform Demo | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductRoutingModule { }
