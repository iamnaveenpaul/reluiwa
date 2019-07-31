import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

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
import { ProductModule } from './product/product.module';
import { FaqModule } from './faq/faq.module';
import { TermsModule} from './terms/terms.module';
import { AibooksModule } from './aibooks/aibooks.module';
import { SalesopsModule } from './salesops/salesops.module';
import { ForecastModule } from './forecast/forecast.module';
import { AccountModule } from './account/account.module';
import { TeamModule } from './team/team.module';
import { CroModule } from './cro/cro.module';
import { SalesMgrModule } from './salesMgr/salesMgr.module';
import { SalesRepModule } from './salesRep/salesRep.module';
import { PricingModule } from './pricing/pricing.module';
import { PrivacyModule } from './privacy/privacy.module';
import { SecurityModule } from './security/security.module';
import { OpsManagerModule } from './opsManager/opsManager.module';
import { GoogleVerifyModule } from './googleVerification/googleVerify.module';
import { ThankYouModule } from './thank-you/thankyou.module';
import { DocumentsModule } from './documents/documents.module';
import { CrmModule } from './crm/crm.module';
import { FormsDemoModule } from './forms/formsdemo.module';

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
    ProductModule,
    FaqModule,
    TermsModule,
    PrivacyModule,
    AibooksModule,
    SalesopsModule,
    ForecastModule,
    AccountModule,
    TeamModule,
    CroModule,
    SalesMgrModule,
    SalesRepModule,
    PricingModule,
    SecurityModule,
    ThankYouModule,
    OpsManagerModule,
    DocumentsModule,
    CrmModule,
    FormsDemoModule,
    // GoogleVerifyModule,
    AppRoutingModule // This should always load at the end. If not all the modules after AppRoutingModule will not work
  ],
  declarations: [AppComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
