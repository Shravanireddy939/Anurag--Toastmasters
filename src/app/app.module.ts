import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtiquetteComponent } from './etiquette/etiquette.component';
import { HomeComponent } from './home/home.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ExecutivecommitteeComponent } from './executivecommittee/executivecommittee.component';
import { ResourcesComponent } from './resources/resources.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ContestsComponent } from './contests/contests.component';
import { AwardsComponent } from './awards/awards.component';


@NgModule({
  declarations: [
    AppComponent,
    EtiquetteComponent,
    HomeComponent,
    AchievementsComponent,
    ExecutivecommitteeComponent,
    ResourcesComponent,
    ContestsComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
