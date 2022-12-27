import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartViewComponent } from './views/cart-view/cart-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { ProductDetailsViewComponent } from './views/product-details-view/product-details-view.component';
import { ProductListViewComponent } from './views/product-list-view/product-list-view.component';

const routes: Routes = [
  {
    path: 'products', 
    component: ProductListViewComponent
  },
  {
    path: 'products/:id', 
    component: ProductDetailsViewComponent,
  },
  {
    path: 'cart', 
    component: CartViewComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: NotFoundViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
