import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  name: string = "";
  description: string = "";
  price: number = 0;

  save(): void {
    console.log(`${this.name} ${this.description}`);
  }
}
