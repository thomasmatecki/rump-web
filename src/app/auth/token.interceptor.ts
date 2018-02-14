import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import {TokenManager} from "./token-manager.service";

@Injectable()
export class TokenInterceptor /*extends TokenManager*/
  implements HttpInterceptor {

  constructor(private tokenManager: TokenManager) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.tokenManager.hasValidToken()) {
      request = request.clone({
        setHeaders: {
          "x-auth-token": this.tokenManager.getToken()
        }
      });
    }

    return next.handle(request);
  }
}
