import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { SalesRepRoutingModule } from './salesRep-routing.module';
import { SalesRepComponent } from './salesRep.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    SalesRepRoutingModule
  ],
  declarations: [
    SalesRepComponent
  ],
  providers: [
  ]
})
export class SalesRepModule { }
