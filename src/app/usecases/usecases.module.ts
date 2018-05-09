import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { UsecasesRoutingModule } from './usecases-routing.module';
import {UsecasesComponent} from './usecases.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TranslateModule,
    UsecasesRoutingModule
  ],
  declarations: [
    UsecasesComponent
  ]
})
export class UsecasesModule { }
