import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'; // router outlet modulo que permite en el templeate html utilizar el componente
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { UserIconComponent } from '../../components/user-icon/user-icon.component';
import { ButtonComponent } from '../../components/button/button.component';
import { I18nService } from '../../services/i18n/i18n.service';



@Component({
  selector: 'app-home',
  imports: [RouterOutlet,NavigationComponent,UserIconComponent,ButtonComponent], //routerlink es para la barra de navegacion , royter link ayuda que la etiqueta link se quede marcada 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor (private i18nService: I18nService){

  }
  changeLanguaje(lang : string){
    this.i18nService.setLanguage(lang)
  }
}
