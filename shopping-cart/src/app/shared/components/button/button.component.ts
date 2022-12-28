import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  //Variable Input basica
  //@Input()readonly: boolean = false;

  private _readonly: boolean = false;
  
  @Input() get readonly() {
    return this._readonly;
  }
  set readonly(value: boolean) {
    if (this._readonly !== value) {
      this._readonly = value;
      this.readonlyChanged.emit(this._readonly);
    }
  }

  @Output() readonlyChanged: EventEmitter<boolean> = 
    new EventEmitter<boolean>();
}
