import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import {None, Option, Some} from "../util/Monads"

const TOKEN_STORAGE_KEY: string = "ui-auth-token";

@Injectable()
export class TokenManager {

  public readonly JWT_TOKEN_HEADER = "x-auth-token";
  protected token: Option<string> = None;

  constructor() {
    this.token = Option.fromNullable(localStorage.getItem(TOKEN_STORAGE_KEY))
  }

  hasValidToken(): boolean {
    return this.token.folded(() => false)((token: string) => true)
  }

  getToken(): string {
    return this.token.get();
  }


  clearToken(): void {
    this.token = None;
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    this.token = new Some(token);
  }
}
