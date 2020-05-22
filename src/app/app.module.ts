import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LanguagesComponent } from './languages/languages.component';
import { HumanComponent } from './languages/human/human.component';
import { ComputerComponent } from './languages/computer/computer.component';
import { WebComponent } from './languages/web/web.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MeComponent } from './me/me.component';
import { LogoPipe } from './timeline/logo-pipe';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';

import {AppearDirective} from './appear';
import { Animations } from './animation';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LanguagesComponent,
    HumanComponent,
    ComputerComponent,
    WebComponent,
    TimelineComponent,
    MeComponent,
    LogoPipe,
    ContactComponent,
    ResumeComponent,
    AboutComponent,
    AppearDirective
  ],
  imports: [
    BrowserModule, 
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'timeline', component: TimelineComponent},
      { path: 'timeline/:id', component: TimelineComponent},
      { path: 'computer', component: ComputerComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])  //, { enableTracing: true }
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
