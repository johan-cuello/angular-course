import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/services/product-service/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  data?: Observable<Product[]>;
  selectedProduct?: Product;
  constructor(
    private readonly productService: ProductService,
    private readonly router: Router) {
  }

  ngOnInit() {
    this.data = this.productService.getList();
  }

  searchValueChanged(keyword: string): void {
    //this.data = this.productService.search(keyword);
  }

  selectedProductHandler(item: Product): void {
    this.router.navigate(['/products', item.id]);
  }
}
