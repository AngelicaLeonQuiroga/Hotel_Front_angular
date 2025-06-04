import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DetailClientComponent } from '../detail-client/detail-client.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { ClientI } from '../models/ClientI';
import { ClientServiceService } from '../service/client-service.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-new-client',
  imports: [ButtonComponent,DetailClientComponent],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.scss'
})
export class NewClientComponent implements AfterViewInit{
  public modalService!: ModalService
  private data: ClientI= {
    name:'',
    phone:'',
    city:'',
    mail:'',

  }
  @ViewChild('form') form!: ElementRef;

  @ViewChild(DetailClientComponent,{read:ElementRef}) detailComponent!:ElementRef;

    constructor (private clientService: ClientServiceService){

    }

  ngAfterViewInit(): void {
    this.detailComponent.nativeElement.querySelectorAll('label').forEach((element: HTMLElement) =>{
      const nameLabel= element.getAttribute('for') as keyof ClientI;
      const input = element.querySelector('input');
      input?.setAttribute('required', '')
      input?.addEventListener('input',(event: any)=> {
        if(event.target.value == '' ){
          event.target.classList.add("ng-invalid");
          event.target.classList.add("ng-touched");
        }else{
          event?.target.classList.remove("ng-invalid");
        }
        if(nameLabel !== 'id'){
          (this.data)[nameLabel]= event.target.value;
        }
      })
      
    })
  }

  public checkButtonCreate(){
    if(!this.form){
      return true;
    }
    let existInvalidInput = false;
    Array.from(this.form.nativeElement.elements).forEach((element: any) => {
      if(!element.getAttribute('disabled') && element.validity.valueMissing){
        existInvalidInput = true;
        element.classList.add("ng-invalid");
        element.classList.add("ng-touched");
      }
    });
    return existInvalidInput;
  };

  async clickButtonCreate(){
    if(this.checkButtonCreate()){
      return;
    };
     try {
     await this.clientService.createClient(this.data as ClientI);
     this.modalService.close();
     console.log(this.data)
  } catch (error) {
    throw error;
  }
  }

  public close(){
    this.modalService.close();
  }

}
