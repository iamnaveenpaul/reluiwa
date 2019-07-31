import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsdemoRoutingModule } from './formsdemo-routing.module';
import {FormsdemoComponent} from './formsdemo.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TranslateModule,
    FormsdemoRoutingModule
  ],
  declarations: [
    FormsdemoComponent
  ]
})
export class FormsDemoModule { }
