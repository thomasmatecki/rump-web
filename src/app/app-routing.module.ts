import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SvcWorkbenchComponent} from "./svc-workbench/svc-workbench.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {SigninGuard} from "./auth/signin-guard.service"
import {ApplicationGuard} from "./auth/application-guard.service";

const routes: Routes = [
  {path: '', component: SvcWorkbenchComponent},
  {path: 'app', component: SvcWorkbenchComponent, canActivate: [ApplicationGuard]},
  {path: 'login', component: LoginComponent, canActivate: [SigninGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [SigninGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
