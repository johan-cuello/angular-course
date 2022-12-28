import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GuardDemoGuard } from './guards/guard-demo.guard';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { ProductDetailsViewComponent } from './views/product-details-view/product-details-view.component';
import { ProductListViewComponent } from './views/product-list-view/product-list-view.component';

const routes: Routes = [
  {
    path: 'products', 
    children:[
      {
        path: '', 
        component: ProductListViewComponent,
      },
      {
        path: ':id', 
        component: ProductDetailsViewComponent,
      },
    ]
  },
  {
    path: 'cart', 
    loadChildren: () => import('./cart/cart.module')
      .then(m => m.CartModule),

  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module')
      .then(m=> m.InventoryModule)
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
