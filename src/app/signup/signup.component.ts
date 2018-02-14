import {Component, OnInit} from '@angular/core';
import {UserSignup} from "../model/User"
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupGroup: FormGroup;

  userInfo = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordVerify: "",
  };

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    this.signupGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],

      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordVerify: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  onSubmit() {

    const userSignup: UserSignup = {
      firstName: this.userInfo.firstName,
      lastName: this.userInfo.lastName,
      email: this.userInfo.email,
      credentials: {
        identifier: this.userInfo.email,
        password: this.userInfo.password
      }
    };

    this.http.post<UserSignup>('/auth/signup', userSignup).subscribe(data => {

    });

    this.router.navigateByUrl('', {skipLocationChange: false});
  }
}
