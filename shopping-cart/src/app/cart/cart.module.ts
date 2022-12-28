import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './views/cart-view/cart-view.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartInfoComponent } from './views/cart-info/cart-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartViewComponent,
    CartInfoComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
