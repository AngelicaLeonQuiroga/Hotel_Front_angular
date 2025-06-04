import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type TranslationsT= Record<string,string>
@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private currentLang ='es';
  private translations: Record<string, string> ={};

  constructor(private http: HttpClient) { };
  setLanguage(lang: string):void {
    this.currentLang = lang;
    this.loadTranslations(lang).subscribe((data)=>{
      this.translations =data;
    })
  }
  private loadTranslations(lang:string): Observable<TranslationsT>{
    return this.http.get<TranslationsT>(`/assets/i18n/${lang}.json`)
  }
  public translate(key: string): string {//traducir los valores que le pasamos por parametros
    return this.translations[key] || key;

  }
}
