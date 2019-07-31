import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrmRoutingModule } from './crm-routing.module';
import { CrmComponent } from './crm.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    CrmRoutingModule
  ],
  declarations: [
    CrmComponent
  ],
  providers: [
  ]
})
export class CrmModule { }
