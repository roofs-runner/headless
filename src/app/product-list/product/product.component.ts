import { Component } from '@angular/core';

import _ from 'lodash';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  productsJSON = '{"items":[{"id":0,"sku":"string","name":"string","attributeSetId":0,"price":0,"status":0,"visibility":0,"typeId":"string","createdAt":"string","updatedAt":"string","weight":0},{"id":0,"sku":"string","name":"string","attributeSetId":0,"price":0,"status":0,"visibility":0,"typeId":"string","createdAt":"string","updatedAt":"string","weight":0}]}';
  products = JSON.parse(this.productsJSON);
  // formattedProducts = [];

  constructor() {
    console.log(this.products);

    // this.products = _.toArray(this.products);

    console.log(this.products);
  }
}
