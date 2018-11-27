import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { OpsManagerRoutingModule } from './opsManager-routing.module';
import { OpsManagerComponent } from './opsManager.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    OpsManagerRoutingModule
  ],
  declarations: [
    OpsManagerComponent
  ],
  providers: [
  ]
})
export class OpsManagerModule { }
