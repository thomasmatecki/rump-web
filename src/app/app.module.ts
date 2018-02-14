import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'; // <-- #1 import module

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {AppComponent} from './app.component';
import {SvcEntityComponent} from './svc-entity/svc-entity.component';
import {SvcPropertyComponent} from './svc-property/svc-property.component';
import {AppRoutingModule} from './app-routing.module';
import {SvcWorkbenchComponent} from './svc-workbench/svc-workbench.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {TokenInterceptor} from "./auth/token.interceptor";
import {AuthenticationService} from "./auth/authentication.service";
import {SigninGuard} from "./auth/signin-guard.service";
import {ApplicationGuard} from "./auth/application-guard.service";
import {TokenManager} from "./auth/token-manager.service";

@NgModule({
  declarations: [
    AppComponent,
    SvcEntityComponent,
    SvcPropertyComponent,
    SvcWorkbenchComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [
    TokenManager,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    SigninGuard,
    ApplicationGuard,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
