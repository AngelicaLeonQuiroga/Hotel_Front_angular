import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateRooms'
})
export class StateRoomsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return value ? 'Libre' : 'Ocupado';
  }

}
