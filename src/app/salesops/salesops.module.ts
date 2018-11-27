import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { SalesopsRoutingModule } from './salesops-routing.module';
import { SalesopsComponent } from './salesops.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    SalesopsRoutingModule
  ],
  declarations: [
    SalesopsComponent
  ],
  providers: [
  ]
})
export class SalesopsModule { }
