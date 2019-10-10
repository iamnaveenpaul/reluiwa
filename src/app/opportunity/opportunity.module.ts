import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpportunityRoutingModule } from './opportunity-routing.module';
import { OpportunityComponent } from './opportunity.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    OpportunityRoutingModule
  ],
  declarations: [
    OpportunityComponent
  ],
  providers: [
  ]
})
export class OpportunityModule { }
