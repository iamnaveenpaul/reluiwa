import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { AccountComponent } from './account.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/account-management', pathMatch: 'full' },
    { path: 'account-management', component: AccountComponent,
      data: { title: extract('Sales Account Management | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccountRoutingModule { }
