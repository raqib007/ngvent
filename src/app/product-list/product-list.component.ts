import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  private CurrentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter<Product>();
  }

  ngOnInit(): void {
  }

  clicked(product: Product): void{
    this.CurrentProduct = product;
    this.onProductSelected.emit(product);
    // console.log(product);
  }

  isSelected(product: Product): boolean{
    if (!product || !this.CurrentProduct){
      return;
    }
    return product.sku === this.CurrentProduct.sku;
  }

}
