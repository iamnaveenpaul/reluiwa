import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesMgrRoutingModule } from './salesMgr-routing.module';
import { SalesMgrComponent } from './salesMgr.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    SalesMgrRoutingModule
  ],
  declarations: [
    SalesMgrComponent
  ],
  providers: [
  ]
})
export class SalesMgrModule { }
