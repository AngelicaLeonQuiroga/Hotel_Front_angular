import { I18nSelectPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18nService } from './services/i18n/i18n.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotel_front';
  constructor(private translationService: I18nService){ // esto define el lenguaje por defecto de toda la aplicacion 
    this.translationService.setLanguage('es')
  }
}
