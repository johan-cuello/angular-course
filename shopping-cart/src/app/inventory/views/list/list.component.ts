import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Product } from '../../../services/product-service/product';
import { ProductService } from '../../../services/product-service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  implements OnInit {
  
  data?: Observable<Product[]>;
  
  constructor(private readonly productService: ProductService) {

  }
  ngOnInit() {
    this.data = this.productService.getList();
  }

  delete(product: Product) {
    this.productService.removeItemById(product.id!)
      .pipe(take(1))
      .subscribe(() => {
        this.data = this.productService.getList();
      });
  }
}
