import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartInfoComponent } from './views/cart-info/cart-info.component';
import { CartViewComponent } from './views/cart-view/cart-view.component';

const routes: Routes = [
  {
    path: '', 
    component: CartViewComponent
  },
  {
    path: 'info', 
    component: CartInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
