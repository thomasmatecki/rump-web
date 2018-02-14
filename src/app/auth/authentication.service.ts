import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Credentials} from "../model/User";
import {Observer} from "rxjs"
import {None, Some} from "../util/Monads";
import {TokenManager} from "./token-manager.service";


@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient,
              private tokenManager: TokenManager) {
  }

  isLoggedIn(): boolean {
    return this.tokenManager.hasValidToken();
  }

  login(credentials: Credentials, loginHandler) {

    const responseHandler: Observer<HttpResponse<any>> = {
      next: response => {
        if (response.status == 200 && response.headers.has(this.tokenManager.JWT_TOKEN_HEADER)) {
          this.tokenManager.setToken(response.headers.get(this.tokenManager.JWT_TOKEN_HEADER));
          loginHandler(None);
        } else {
          loginHandler(new Some(response.statusText));
        }
      },
      complete: () => {
        console.debug("login Complete")
      },
      error: () => {
        loginHandler(new Some("Invalid Username or Password"));
      }
    };

    this.http.post<Credentials>(
      '/auth/login',
      credentials,
      {observe: 'response'}).subscribe(responseHandler);

  }

  logout() {
    this.tokenManager.clearToken();
    this.http.get("/auth/logout")
  }
}
