import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BusinessComponent } from './components/business/business.component';
import { HomeComponent } from './components/home/home.component';
import { RecruiterComponent } from './components/recruiter/recruiter.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'recruiter',
    component: RecruiterComponent,
  },
  {
    path: 'business',
    component: BusinessComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
