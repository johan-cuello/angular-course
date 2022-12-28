import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './views/list/list.component';
import { DetailsComponent } from './views/details/details.component';
import { CreateComponent } from './views/create/create.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule
  ]
})
export class InventoryModule { }
