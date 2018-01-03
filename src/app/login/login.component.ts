import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {SvcEntity} from "../model/Svc";
import {Credentials} from "../model/User";
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/do';

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
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    this.loginGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.http.post<Credentials>('/auth/login', this.credentials).subscribe(data => {
      console.log(data)
    });

    this.router.navigateByUrl('', {skipLocationChange: false});

  }
}
