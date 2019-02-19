import { Component,  Input, HostBinding } from '@angular/core';
import { Product } from '/products.ts';


@Component({
  selector: 'app-product-image',
  template: `
  <img class="app-product-image" [src]="product.imageURL">
  `
})
export class ProductImageComponent implements OnInit {

  @Input () product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }




}
