import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Credentials} from "../model/User";
import {Router} from '@angular/router';
import 'rxjs/add/operator/do';
import {MatSnackBar} from '@angular/material';
import {AuthenticationService} from "../auth/authentication.service";
import {Option} from "../util/Monads";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;

  credentials: Credentials = {
    identifier: "",
    password: ""
  };

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   *
   */
  onSubmit(): void {
    this.authService.login(this.credentials, Option.fold(
      () => {
        this.router.navigate([""]);
      },
      (error) => {

      }
    ));
  }

  /**
   *
   */
  onDoSignUp() {
    //this.router.navigate(["signup"]);
  }
}
