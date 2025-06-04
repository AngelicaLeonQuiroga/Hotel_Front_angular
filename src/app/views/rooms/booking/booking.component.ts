import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomI } from '../models/roomI';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  @Input()
  rooms!: Array<RoomI>
  @Output()
  reservedRoom = new EventEmitter<RoomI>
}
