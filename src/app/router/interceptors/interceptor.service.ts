import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export function InterceptorService(req: HttpRequest<unknown>, next: HttpHandlerFn){
  return next(req).pipe(
      catchError((error: HttpErrorResponse)=>{
    if(error instanceof HttpErrorResponse){
      console.error(`Http Error:  ${error.status} - ${error.message}`)
    } else{
      console.error('an unknown error occurred');
    }
    return throwError(()=> new Error(error.message))
  })
    )
}


/*@Injectable()
export class InterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse)=>{
    if(error instanceof HttpErrorResponse){
      console.error('Http Error: ${error.status}- ${error.message}')
    } else{
      console.error('an unkwon error occurred');
    }
    return throwError(()=> new Error(error.message))
  })
    )
  }
}*/
