import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product-service/product.service';
import { ProductDetailsViewComponent } from './views/product-details-view/product-details-view.component';
import { ProductListViewComponent } from './views/product-list-view/product-list-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { SharedModule } from './shared/shared.module';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrefixPipe } from './pipes/prefix.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    DetailsComponent,
    ProductDetailsViewComponent,
    ProductListViewComponent,
    NotFoundViewComponent,
    MenuComponent,
    PrefixPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
