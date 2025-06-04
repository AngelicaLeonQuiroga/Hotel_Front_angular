import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ClientComponent } from './views/client/client.component';
import { RoomsComponent } from './views/rooms/rooms.component';
import { AdminComponent } from './views/admin/admin.component';
import { loginGuardGuard } from './router/guards/login-guard.guard';
import { DetailClientComponent } from './views/clients/detail-client/detail-client.component';

export const routes: Routes = [
    {path:'login',component: LoginComponent},
    {path: 'home', component: HomeComponent,
        canActivate: [loginGuardGuard],// esta propiedad es para usar la guarda que creamos
        //subrutas de la ruta home
        children:[
            {path:'clients', component:ClientComponent},
            {path:'clients/:id', component:DetailClientComponent, canActivate:[loginGuardGuard]},
            {path:'roomes', component: RoomsComponent},
            {path:'admin', component: AdminComponent}
        ]
    },
    {path: '' , redirectTo:'/login', pathMatch:'full'},// cuando en la url no hay informacion de cual screem mostrar esto redirecciona a home
    {
        path: '**',
        loadComponent: ()=> import('./views/page-not-found/page-not-found.component')
        .then(module=>module.PageNotFoundComponent)}
];
