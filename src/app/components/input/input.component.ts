import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
import { DetailClientComponent } from '../../views/clients/detail-client/detail-client.component';

@Component({
  selector: 'app-input',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> InputComponent),
      multi:true
    }
  ]
})
export class InputComponent implements ControlValueAccessor{
  @Input()
  public value: string='';
  @Input()
  public disabled = false;
  @Output()
  public valueChange=new EventEmitter<string>();
  public onTouched?: any=()=>{};

  private onChange?: any =()=>{};
  public inputEvent(event: any){
    this.value=event?.target?.value;
    this.onChange?.(this.value);
    this.valueChange.emit(this.value);
  };


  writeValue(obj: string): void{
    this.value=obj;
  }
  registerOnChange(fn:any): void{
    this.onChange=fn;
  }
  registerOnTouched(fn:any):void{
    this.onTouched=fn;
  }
  setDisabledState?(isDisabled:boolean):void{
    this.disabled = isDisabled;
  }

}
