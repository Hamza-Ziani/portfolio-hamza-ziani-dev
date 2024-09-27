import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormationsComponent } from './components/formations/formations.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
  {
    path: '',component : HomeComponent
  },
  {
    path: 'about',component : AboutComponent
  },
  {
    path: 'contact',component : ContactComponent
  },
  {
    path: 'formations',component : FormationsComponent
  },
  {
    path: 'projects',component : ProjectsComponent
  },
  {
    path: 'skills',component : SkillsComponent
  },
  {
    path: 'services',component : ServicesComponent
  }
];
