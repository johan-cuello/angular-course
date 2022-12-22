import { Component } from '@angular/core';
import { Product } from './services/product-service/product';
import { ProductService } from './services/product-service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';
  data?: Product[];
  
  constructor(private readonly productService: ProductService) {
  }

  ngOnInit(): void {
    this.data = this.productService.getList();
  }

  searchValueChanged(keyword: string): void {
    this.data = this.productService.search(keyword);
  }
}
