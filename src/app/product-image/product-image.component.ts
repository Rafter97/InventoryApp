import { Component,  Input, HostBinding,OnInit } from '@angular/core';
import { Product } from '../product/products.model';


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
  
  ngOnInit() {
  }



}
