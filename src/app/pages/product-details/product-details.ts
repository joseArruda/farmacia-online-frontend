import { Component } from '@angular/core';
import { InventoryService } from '../../core/services/inventoryService.service';

@Component({
  selector: 'app-product-details',
  imports: [  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  products: any;

  constructor(
    private inventoryService: InventoryService
  ){}

  showProduct(){
    this.inventoryService.getById()
  }

}
