import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AibooksRoutingModule } from './aibooks-routing.module';
import { AibooksComponent } from './aibooks.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    AibooksRoutingModule
  ],
  declarations: [
    AibooksComponent
  ]
})
export class AibooksModule { }
