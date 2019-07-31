import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    TermsRoutingModule
  ],
  declarations: [
    TermsComponent
  ],
  providers: [
  ]
})
export class TermsModule { }
