import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    DemoRoutingModule
  ],
  declarations: [
    DemoComponent
  ],
  providers: [
  ]
})
export class DemoModule { }
