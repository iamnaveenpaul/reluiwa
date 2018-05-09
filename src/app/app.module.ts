import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { DemoModule } from './demo/demo.module';
import { WhitepaperModule } from './whitepaper/whitepaper.module';
import { UsecasesModule } from './usecases/usecases.module';
import { CasestudiesModule } from './casestudies/casestudies.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    DemoModule,
    AboutModule,
    LoginModule,
    WhitepaperModule,
    CasestudiesModule,
    UsecasesModule,
    AppRoutingModule // This should always load at the end. If not all the modules after AppRoutingModule will not work
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
