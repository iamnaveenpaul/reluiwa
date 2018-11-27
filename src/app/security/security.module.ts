import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    SecurityRoutingModule
  ],
  declarations: [
    SecurityComponent
  ],
  providers: [
  ]
})
export class SecurityModule { }
