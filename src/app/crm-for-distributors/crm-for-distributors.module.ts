import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrmForDistributorsRoutingModule } from './crm-for-distributors-routing.module';
import { CrmComponent } from './crm.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    CrmForDistributorsRoutingModule
  ],
  declarations: [
    CrmComponent
  ],
  providers: [
  ]
})
export class CrmForDistributorsModule { }
