import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, take } from 'rxjs';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm?: FormGroup;
  productId: string | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService) {

  }
  ngOnInit(): void {
    this.productId =  this.route.snapshot.paramMap.get("id") as string;
    if (!!this.productId) {
      this.productService
      .getItemById(this.productId)
      .pipe(
        filter(product => !!product),
        take(1))
      .subscribe(products => {
        const product = products![0];

        this.editForm = this.fb.group({
          id: [product!.id],
          name: [product?.name, Validators.required],
          description: [''],
          price: [product?.price, Validators.required]
        });
      });
    }

  }

  save(): void {
    this.productService.updateItem(
      this.productId!, 
      this.editForm?.value);
  }
}
