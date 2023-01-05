import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Product } from "./product";
import { productData } from "./product-data";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({providedIn: "root"})
export class ProductService {
  baseUrl = environment.productUrl;

  constructor(private readonly httpClient: HttpClient) {

  }

  getList() : Observable<Product[]> {
    const url = this.baseUrl;
    return this.httpClient.get<Product[]>(url);
  }

  search(keyword: string) : Product[] {
    return productData.filter((product) => {
        return product?.name?.toLowerCase().includes(keyword);
    });
  }

  getItemById(id: string | null) : Observable<Product[] | undefined> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Product[]>(url);
  }

  addItem(product: Product) : Observable<Product> {
    const url = this.baseUrl;
    return this.httpClient.post<Product>(url, product);
  }

  updateItem(id: string, product: Product) : Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.put<Product>(url, product, {});
  }

  removeItemById(id: string | null) : Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
