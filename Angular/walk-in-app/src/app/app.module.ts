import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PersonalInfo2Component } from './components/personal-info-2/personal-info-2.component';
import { ExperiencedComponent } from './components/experienced/experienced.component';
import { FresherComponent } from './components/fresher/fresher.component';
import { SummeryComponent } from './components/summery/summery.component';
import { WalkInHomeComponent } from './components/walk-in-home/walk-in-home.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { HallTicketPageComponent } from './components/hall-ticket-page/hall-ticket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateAccountComponent,
    LoginPageComponent,
    PersonalInfoComponent,
    PersonalInfo2Component,
    ExperiencedComponent,
    FresherComponent,
    SummeryComponent,
    WalkInHomeComponent,
    CardDetailsComponent,
    JobDetailsComponent,
    HallTicketPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
