import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LanguagesComponent } from './languages/languages.component';
import { HumanComponent } from './languages/human/human.component';
import { ComputerComponent } from './languages/computer/computer.component';
import { WebComponent } from './languages/web/web.component';
import { TimelineComponent } from './timeline/timeline.component';
import { RouterModule } from '@angular/router';
import { MeComponent } from './me/me.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoPipe } from './timeline/logo-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';


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
    ResumeComponent
  ],
  imports: [
    BrowserModule, 
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AnimateOnScrollModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'timeline', component: TimelineComponent},
      { path: 'timeline/:id', component: TimelineComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])  //, { enableTracing: true }
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
