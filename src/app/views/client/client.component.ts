import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TdComponent } from '../../components/table/td/td.component';
import { ThComponent } from '../../components/table/th/th.component';
import { TableComponent } from '../../components/table/table/table.component';
import { ClientServiceService } from '../clients/service/client-service.service';
import { ClientI } from '../clients/models/ClientI';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ModalService } from '../../services/modal.service';
import { DetailClientComponent } from '../clients/detail-client/detail-client.component';
import { NewClientComponent } from '../clients/new-client/new-client.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [CardComponent,TdComponent,ThComponent,TableComponent,InputComponent,ButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent implements OnInit{
  public items!: Array<ClientI>;
  public viewItems !: Array<ClientI>;
  public searchValue= signal('inicial');
  constructor(private clientsService: ClientServiceService, 
    private cf: ChangeDetectorRef, 
    private modalService: ModalService,
    private router: Router){

  }
    private loadClients(){
      this.clientsService.getClients().then((clients)=>{
        console.log(clients)
        this.items = Object.assign([],clients)
        this.viewItems =Object.assign([],clients)
        this.cf.detectChanges()//toma los valores para mostrarlos despues de ir por el private en 
        // el contrustor y tener el valor en el change detection de este mismo componente
      })

    }
    public inputValue(value: any){
      this.searchValue.set(value)
    }
    public search(){
      const items = this.items.filter(e => e.name?.toLocaleLowerCase().includes(this.searchValue().toLocaleLowerCase()))
      this.viewItems = items;
    }
    public newClient(){
        this.modalService.open(NewClientComponent, this.loadClients.bind(this))
    }
    ngOnInit(){
      this.loadClients()
    }
    public goClient(client: ClientI){
      this.router.navigate([`/home/clients/${client.id}`])
    }
}
