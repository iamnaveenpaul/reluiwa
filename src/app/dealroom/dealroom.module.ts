import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DealroomRoutingModule } from './dealroom-routing.module';
import { DealroomComponent } from './dealroom.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    DealroomRoutingModule
  ],
  declarations: [
    DealroomComponent
  ],
  providers: [
  ]
})
export class DealroomModule { }
