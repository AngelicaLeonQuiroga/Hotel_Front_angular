import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { InterceptorService } from './router/interceptors/interceptor.service';
import { LoginService } from './views/login/services/login.service';
import { environment } from '../environments/environment';
import { LoginServiceMockService } from './views/login/services/loginmock/login-service.mock.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withHashLocation()), //el withHashlocation funciona para definir la ruta del
  //hash /#/ que se conoce como ruta perteneciendte solo al front de la aplicacion
    provideHttpClient(withInterceptors([InterceptorService]))/*
  {
      provide: LoginService,
      useClass: environment.production ? LoginService : LoginServiceMockService
    }*/]
};
