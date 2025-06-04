import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../models/User';
import { catchError, Observable, throwError } from 'rxjs';
import { ResponseLoginBodyI } from '../../models/ResponseLoginBodyI';

@Injectable({
  providedIn: 'root'
})
export class LoginRepositoryService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseUrl: string ='./api'
  constructor() { }
  login(data: User): Observable<ResponseLoginBodyI>{
    return this.http.post<ResponseLoginBodyI>(`${this.baseUrl}/login`, data) // podemos hacer post, get, put, options
   // .pipe(catchError(this.handleError))//el pipe sirve para captirar los errores
  }
  //handleError(error: HttpErrorResponse){
  //  if(error instanceof HttpErrorResponse){
  //   console.error('Http Error: ${error.status}- ${error.message}')
  //  } else{
  //    console.error('an unkwon error occurred');
  //  }
  //  return throwError(()=> new Error(error.message))
  //}

}
