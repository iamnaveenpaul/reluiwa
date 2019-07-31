import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FaqRoutingModule
  ],
  declarations: [
    FaqComponent
  ],
  providers: [
  ]
})
export class FaqModule { }
