import { Injectable } from '@angular/core';
import { LoginRepositoryService } from '../servicies/repository/login.repository.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private repository:LoginRepositoryService) { }
  loginUser(user:any){//esto para cominicarse con el back 
    return new Promise((success, error)=>{
      //1 success('ok') opcion 1 sin informacion backend
               this.repository.login(user).subscribe((data)=>{// el metodo subscribe asegura que la funcion post se va a realizar, 
              // es obliagtorio la confirmacion para la peticion, pidiendo informacion de backend
                 if(data.token){
                 window.localStorage.setItem('token', data.token);
                 success('');
        }
      })
    })
  }

}