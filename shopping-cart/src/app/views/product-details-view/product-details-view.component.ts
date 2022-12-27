import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/services/product-service/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss']
})
export class ProductDetailsViewComponent implements OnInit {
  selectedProduct?: Product | undefined;

  productId: string | null = null;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly location: Location,
    private readonly cartService: CartService) {

  }
  ngOnInit(): void {
    this.productId =  this.route.snapshot.paramMap.get("id");
    this.selectedProduct = this.productService.getItemById(this.productId);
  }

  back() {
    this.location.back();
  }

  addToCart() {
    if (!!this.selectedProduct) {
      this.cartService.addItem(this.selectedProduct);
    }
  }
}
