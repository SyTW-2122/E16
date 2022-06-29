import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(localStorage);
    req = req.clone({
      setHeaders: {
        'token': `${localStorage.getItem("token")}`,
        'username': `${localStorage.getItem("username")}`
      },
    });
    return next.handle(req);
  }
}
