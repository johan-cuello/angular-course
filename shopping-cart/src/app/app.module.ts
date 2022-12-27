import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert.component';
import { ProductService } from './services/product-service/product.service';
import { DetailsComponent } from './components/details/details.component';
import { ProductDetailsViewComponent } from './views/product-details-view/product-details-view.component';
import { ProductListViewComponent } from './views/product-list-view/product-list-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { CartViewComponent } from './views/cart-view/cart-view.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MenuComponent,
    ListComponent,
    ButtonComponent,
    AlertComponent,
    DetailsComponent,
    ProductDetailsViewComponent,
    ProductListViewComponent,
    NotFoundViewComponent,
    CartViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  /*
  providers: [
    ProductService
  ],
  */
  bootstrap: [AppComponent]
})
export class AppModule { }
