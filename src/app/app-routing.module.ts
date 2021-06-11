import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { AgentMainPageComponent } from './Component/agent-main-page/agent-main-page.component';
import { AdminMainPageComponent } from './Component/admin-main-page/admin-main-page.component';
import { InsuredMainPageComponent } from './Component/insured-main-page/insured-main-page.component';


const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "agent", component: AgentMainPageComponent },
  { path: "insured", component: InsuredMainPageComponent },
  { path: "admin", component: AdminMainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
