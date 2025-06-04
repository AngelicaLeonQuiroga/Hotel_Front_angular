import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  type?:'green' | 'red' | 'blue' = 'blue';
  @Input() 
  htmlType: 'button' | 'submit' | 'reset' = 'button'; // tipo funcional del botón

  getTypeClass(){
    const className =`${this.type}-button`
    return className;
  }
}
