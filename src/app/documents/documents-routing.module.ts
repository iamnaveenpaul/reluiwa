import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { DocumentsComponent } from './documents.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/documents-tracking', pathMatch: 'full' },
    { path: 'documents-tracking', component: DocumentsComponent,
      data: { title: extract('Track your Documents | Relatas') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DocumentsRoutingModule { }
