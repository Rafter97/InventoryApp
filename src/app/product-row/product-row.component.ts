import { Component, Input, HostBinding,OnInit } from '@angular/core';
import { Product } from '../product/products.model'

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  ngOnInit() {
  }
}
