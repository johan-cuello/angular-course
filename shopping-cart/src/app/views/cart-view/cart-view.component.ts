import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/services/product-service/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  products?: Product[];

  constructor(private readonly cartService: CartService) {
  }

  ngOnInit() : void {
    this.products = this.cartService.getItems();
  }
}
