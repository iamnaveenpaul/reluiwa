import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PricingRoutingModule
  ],
  declarations: [
    PricingComponent
  ]
})
export class PricingModule { }
