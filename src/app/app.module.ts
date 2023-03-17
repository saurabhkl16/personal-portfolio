import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/eduction.component';
import { PersonalInfoComponent } from './personal-information/personal-info.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResponsiveDirective } from './directive/responsive.directive';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    ContactComponent,
    EducationComponent,
    PersonalInfoComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    SkillsComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
