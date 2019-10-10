import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesAiRoutingModule } from './sales-ai-routing.module';
import { SalesAiComponent } from './sales-ai.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    SalesAiRoutingModule
  ],
  declarations: [
    SalesAiComponent
  ],
  providers: [
  ]
})
export class SalesAiModule { }
