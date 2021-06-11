import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
 import { AgentMainPageComponent } from './Component/agent-main-page/agent-main-page.component';
import { AdminMainPageComponent } from './Component/admin-main-page/admin-main-page.component';
import { InsuredMainPageComponent } from './Component/insured-main-page/insured-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    AgentMainPageComponent,
    InsuredMainPageComponent,
    AdminMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
