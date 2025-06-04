import { inject, Injectable } from '@angular/core';
import { ClientRepositoryService } from '../repository/client-repository.service';
import { ClientI } from '../models/ClientI';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private readonly repository=inject(ClientRepositoryService)
  constructor() { }
  public getClients(): Promise<ClientI[]>{
    return new Promise((success, error)=>{
        this.repository.getClients().subscribe({
          next:(data: any)=> {
              success(data.clients)
          },
          error:(err)=>{
            error(err);
          }
        })
    })
  }

 public createClient(client: ClientI){
  return new Promise((success, error)=>{
    this.repository.createClient(client).subscribe({
      next:()=> success (undefined),
      error: (_error) => error(_error)
    })
  })
 };

 public getClient(numberClient: number): Promise<ClientI>{
  return new Promise((success,error)=>{
    this.repository.getClient(numberClient).subscribe({
    next: (data:any)=> success (data.client),
    error: (_error) => error(_error)
  })
  })

 }

}
