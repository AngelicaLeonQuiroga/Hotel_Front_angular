import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ClientI } from '../models/ClientI';

@Injectable({
  providedIn: 'root'
})
export class ClientRepositoryService {
  private readonly http: HttpClient= inject(HttpClient);
  private readonly baseUrl= './api';
  constructor() { }
  public getClients(){
    return this.http.get(`${this.baseUrl}/clients`)
  }
  public createClient(client: ClientI){
    return this.http.post(`${this.baseUrl}/clients`,{body:client})
  }
  public getClient(numberClient: number){
    return this.http.get(`${this.baseUrl}/clients/${numberClient}`)
  }
}
