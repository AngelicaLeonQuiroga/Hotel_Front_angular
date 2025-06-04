import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { LoginService } from './services/login.service';
import { User } from './models/User';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LoginServiceMockService } from './services/loginmock/login-service.mock.service';
import { BookingComponent } from '../rooms/booking/booking.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,InputComponent,BookingComponent],// formularios de tipo reactivo se usa el reactiveformsModule y para los de tipo templete usamos el formModule
  providers:[ ],// este funciona como una alternativa para cargar el login service mock en vez del login service normal
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
/*
  public nombre:string='';// esta propiedad se asigna en el template html al input
  public pass: string='';
  onSubmit(form:any){
    if (form.valid){
      // enviar al api back
      console.log('formulario valido', form.value)
    }else{
      console.log('formulario invalido')
    }
  }*/
    formulario: FormGroup;
    constructor(private loginService: LoginService, private router: Router){
      this.formulario= new FormGroup({
        nombre: new FormControl(undefined,[Validators.required, Validators.minLength(3)]),
        clave: new FormControl('',[Validators.required, Validators.minLength(6)])
      })
    }
    async onSubmit(){
      //console.log(this.formulario.value.nombre)
      //console.log(this.formulario.value.clave)
      // aca deberiamos llamar el servicio que creamos para el back
      const user = new User (this.formulario.value.nombre, this.formulario.value.clave)
     try {
      await this.loginService.loginUser(user);
      this.router.navigate(['/home']);
     } catch (err) {
      throw err;
     }
      
    }


}
