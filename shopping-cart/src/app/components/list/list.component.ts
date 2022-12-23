import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "src/app/services/product-service/product";
import { ProductService } from "../../services/product-service/product.service";

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  selector: 'app-list',
  //providers: [ ProductService ]
})
export class ListComponent implements OnInit {
  emptyList = "No se han encontrado elementos!";
  @Input() data?: Product[];
  @Output() selectedItem: EventEmitter<Product> 
    = new EventEmitter<Product>();
  
  /*
  data: Product[] = [];
  constructor(private readonly productService: ProductService) {
  }
  ngOnInit(): void {
    this.data = this.productService.getList();
  }
  */

  selectItemHandler(item: Product) {
    if(!!item) {
      this.selectedItem.emit(item);
    }
  }

  ngOnInit(): void {

  }
}