import { Injectable, OnDestroy } from '@angular/core';
import { Product } from '../product-service/product';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {

  constructor() { }

  private products: Product[] = [];

  addItem(product: Product) {
    this.products.push(product);
  }

  getItems(): Product[] {
    return this.products;
  }

  removeItemById(id: string) {
    const item = this.products.find(product => product.id == id);
    if (!!item) {
      this.removeItem(item);
    }
  }

  removeItem(item: Product) {
    const index = this.products.indexOf(item);
    this.removeItemByIndex(index);
  }

  removeItemByIndex(index: number) {
    if (index > -1) { // only splice array when item is found
      this.products.splice(index, 1); // 2nd parameter means remove one item only
    }
  }

  ngOnDestroy(): void {
    console.log("Carservice released")
  }
}
