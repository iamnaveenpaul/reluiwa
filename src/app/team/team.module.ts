import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    TeamRoutingModule
  ],
  declarations: [
    TeamComponent
  ],
  providers: [
  ]
})
export class TeamModule { }
