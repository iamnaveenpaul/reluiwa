import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesAnalyticsRoutingModule } from './sales-analytics-routing.module';
import { SalesAiComponent } from './sales-analytics.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    SalesAnalyticsRoutingModule
  ],
  declarations: [
    SalesAiComponent
  ],
  providers: [
  ]
})
export class SalesAnalyticsModule { }
