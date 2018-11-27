import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { WhitepaperComponent } from './whitepaper.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/white-paper', pathMatch: 'full' },
    { path: 'white-paper', component: WhitepaperComponent, data: { title: extract('Whitepaper | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WhitepaperRoutingModule { }
