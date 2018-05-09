import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CasestudiesRoutingModule } from './casestudies-routing.module';
import { CasestudiesComponent } from './casestudies.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TranslateModule,
    CasestudiesRoutingModule
  ],
  declarations: [
    CasestudiesComponent
  ]
})
export class CasestudiesModule { }
