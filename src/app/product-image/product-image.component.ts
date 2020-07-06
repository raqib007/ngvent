import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product-image',
  template: `<img [src]="product.imageURL" mat-card-image alt="Product Image">`,
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('att.class') cssClass = '';

  constructor() { }

  ngOnInit(): void {
  }

}
