import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './views/list/list.component';
import { DetailsComponent } from './views/details/details.component';
import { CreateComponent } from './views/create/create.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './views/edit/edit.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InventoryModule { }
