import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product-service/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  data?: Product[];
  selectedProduct?: Product;
  
  constructor(private readonly productService: ProductService) {
  }

  ngOnInit(): void {
    this.data = this.productService.getList();
  }

  searchValueChanged(keyword: string): void {
    this.data = this.productService.search(keyword);
  }

  selectedProductHandler(item: Product): void {
    this.selectedProduct = item;
  }
}
