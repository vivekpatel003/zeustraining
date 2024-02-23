import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OutletComponent} from './components/outlet/outlet.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PersonalInfo2Component } from './components/personal-info-2/personal-info-2.component';
import { ExperiencedComponent } from './components/experienced/experienced.component';
import { FresherComponent } from './components/fresher/fresher.component';
import { SummeryComponent } from './components/summery/summery.component';
import { WalkInHomeComponent } from './components/walk-in-home/walk-in-home.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { HallTicketPageComponent } from './components/hall-ticket-page/hall-ticket-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';


const routes: Routes = [
  {
    path:'createAccount',
    component:PersonalInfoComponent
  },
  {
    path:'',
    component:OutletComponent
  },
  {
    path:'education',
    component:PersonalInfo2Component
  },
  {
    path:'review',
    component:SummeryComponent
  },
  {
    path:'dashBoard',
    component:WalkInHomeComponent
  },
  {
      path:'cardDetail/:id',
      component:CardDetailsComponent
  },
  {
      path:'hallTicket',
      component:HallTicketPageComponent
  },
  {
    path:'**',
    component:NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
