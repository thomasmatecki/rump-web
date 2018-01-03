import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SvcWorkbenchComponent} from "./svc-workbench/svc-workbench.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {path: '', component: SvcWorkbenchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
