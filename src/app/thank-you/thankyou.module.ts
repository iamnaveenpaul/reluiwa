import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ThankYouRoutingModule } from './thank-you-routing.module';
import {ThankYouComponent} from './thank-you.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TranslateModule,
    ThankYouRoutingModule
  ],
  declarations: [
    ThankYouComponent
  ]
})
export class ThankYouModule { }
