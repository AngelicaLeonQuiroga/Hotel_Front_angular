import { Component } from '@angular/core';
import { appConfig } from '../../app.config';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { TableComponent } from '../../components/table/table/table.component';
import {  RoomI } from './models/roomI';
import { CommonModule } from '@angular/common';
import { TdComponent } from '../../components/table/td/td.component';
import { ThComponent } from '../../components/table/th/th.component';
import { StateRoomsPipe } from '../../components/pipes/state-rooms.pipe';
import { TranslatePipe } from '../../services/i18n/translate.pipe';
import { BookingComponent } from './booking/booking.component';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, 
    ButtonComponent , 
    CardComponent,
    TableComponent,
    TdComponent,
    ThComponent,
    StateRoomsPipe,
    BookingComponent,
    TranslatePipe
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  public rooms: Array<RoomI>=[
    {
      name:'cama simple',
      state: true,
      number: 1
    },
    {
      name:'cama simple',
      state: true,
      number: 2
    },
    {
      name:'cama doble',
      state: true,
      number: 3
    },
    {
      name:'tres camas',
      state: true,
      number: 4
    },
  ]
  public showBooking= false;
  reservedRoom(event: RoomI){

  }
  doBooking(){
    this.showBooking = true;

  }

}
