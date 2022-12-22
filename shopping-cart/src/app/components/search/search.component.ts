import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchKeyword: string = "";

  @Output() searchValueChanged: 
    EventEmitter<string> = new EventEmitter<string>();

  search(): void {
    this.searchValueChanged.emit(this.searchKeyword);
  }

  readonlyChanged(args?: boolean): void {
    console.log(`Readonly changed value ${args}`);
  }
}
