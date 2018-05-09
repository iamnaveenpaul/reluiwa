import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { WhitepaperRoutingModule } from './whitepaper-routing.module';
import { WhitepaperComponent } from './whitepaper.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    WhitepaperRoutingModule
  ],
  declarations: [
    WhitepaperComponent
  ],
  providers: [
  ]
})
export class WhitepaperModule { }
