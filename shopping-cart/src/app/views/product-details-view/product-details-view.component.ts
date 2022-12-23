import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/services/product-service/product';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss']
})
export class ProductDetailsViewComponent implements OnInit {
  selectedProduct?: Product;

  productId: string | null = null;
  constructor(
    private readonly route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.productId =  this.route.snapshot.paramMap.get("id");
  }
}
