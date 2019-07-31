import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsecasesRoutingModule } from './usecases-routing.module';
import {UsecasesComponent} from './usecases.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    UsecasesRoutingModule
  ],
  declarations: [
    UsecasesComponent
  ]
})
export class UsecasesModule { }
