import { Component, Input } from '@angular/core';
import { Product } from 'src/app/services/product-service/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() product?: Product | undefined ;
}
