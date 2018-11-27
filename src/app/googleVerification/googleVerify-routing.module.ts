import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { GoogleVerifyComponent } from './googleVerify.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/google76daa6dd9e160493.html', pathMatch: 'full' },
    { path: 'google76daa6dd9e160493.html', component: GoogleVerifyComponent, data: { title: extract('') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GoogleVerifyRoutingModule { }
