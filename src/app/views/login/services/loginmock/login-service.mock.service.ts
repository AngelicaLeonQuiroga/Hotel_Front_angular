import { Injectable } from '@angular/core';
import { ResponseLoginBodyI } from '../../models/ResponseLoginBodyI';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceMockService {

  constructor() { }
  loginUser(user: any){
     return new Promise((success)=>{
      const data: ResponseLoginBodyI={
        message:'Login successfull',
        token: 'xxxx_xxxxx_xxxxxx'
      };
      success(data);
     })
  }
   
}
