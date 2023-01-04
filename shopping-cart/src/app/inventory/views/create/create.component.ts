import { Component } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  name: string = "";
  description: string = "";
  price: number = 0;
  message = "";

  constructor(private readonly productService: ProductService) {

  }

  save(): void {
    this.productService.addItem({
      name: this.name,
      description: this.description,
      price: this.price
    })
    .subscribe(result => {
      this.message = "The product was created!";

    })
  }
}
