import { Component, OnInit, signal } from '@angular/core';
import { ClientComponent } from '../../client/client.component';
import { InputComponent } from '../../../components/input/input.component';
import { CardComponent } from '../../../components/card/card.component';
import { ClientI } from '../models/ClientI';
import { ClientServiceService } from '../service/client-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-client',
  imports: [InputComponent,CardComponent],
  templateUrl: './detail-client.component.html',
  styleUrl: './detail-client.component.scss'
})
export class DetailClientComponent implements OnInit{
  public client = signal ({name: '', city: '', mail: '', phone:''} as ClientI)
  private numberClient!: number;
  constructor(private clientService: ClientServiceService, private route: ActivatedRoute){
    this.route.paramMap.subscribe((params)=>{
      this.numberClient = parseInt (params.get('id') as string)
    })

  }

  ngOnInit():void{
    if(this.numberClient){
        this.clientService.getClient(this.numberClient).then((_client)=>{
          this.client.set(_client)
        })
    }
  }
}
