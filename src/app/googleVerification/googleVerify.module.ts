import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

// import { CoreModule } from '@app/core';
import { GoogleVerifyRoutingModule } from './googleVerify-routing.module';
import { GoogleVerifyComponent } from './googleVerify.component';


@NgModule({
  imports: [
    // CommonModule,
    // TranslateModule,
    // CoreModule,
    GoogleVerifyRoutingModule
  ],
  declarations: [
    GoogleVerifyComponent
  ],
  providers: [
  ]
})
export class GoogleVerifyModule { }
