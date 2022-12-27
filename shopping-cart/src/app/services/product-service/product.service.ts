import { Inject, Injectable } from "@angular/core";
import { Product } from "./product";
import { productData } from "./product-data";

@Injectable({providedIn: "root"})
export class ProductService {

  getList() : Product[] {
    return productData;
  }

  search(keyword: string) : Product[] {
    return productData.filter((product) => {
        return product?.name?.toLowerCase().includes(keyword);
    });
  }

  getItemById(id: string | null) : Product | undefined {
    return productData.find(item => item.id == id);
  }
}
