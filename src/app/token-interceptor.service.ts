import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service:RecipeService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq =req

    const token= this.service.getToken();
    if (token) {
      authReq= req.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(authReq)
  
  }


}



