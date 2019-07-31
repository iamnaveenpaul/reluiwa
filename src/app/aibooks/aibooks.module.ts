import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AibooksRoutingModule } from './aibooks-routing.module';
import { AibooksComponent } from './aibooks.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    AibooksRoutingModule
  ],
  declarations: [
    AibooksComponent
  ]
})
export class AibooksModule { }
