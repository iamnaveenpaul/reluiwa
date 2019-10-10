import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResourcesRoutingModule } from './resources-routing.module';
import { SalesAiComponent } from './resources.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ResourcesRoutingModule
  ],
  declarations: [
    SalesAiComponent
  ],
  providers: [
  ]
})
export class ResourcesModule { }
