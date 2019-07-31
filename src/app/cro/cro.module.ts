import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CroRoutingModule } from './cro-routing.module';
import { CroComponent } from './cro.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    CroRoutingModule
  ],
  declarations: [
    CroComponent
  ],
  providers: [
  ]
})
export class CroModule { }
