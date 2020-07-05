import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-display',
  template: `<div>\${{price}}</div>`,
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent implements OnInit {

  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

}
