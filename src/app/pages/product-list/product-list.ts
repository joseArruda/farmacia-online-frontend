import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../../core/services/inventoryService.service';
import { CommonModule } from '@angular/common';

import { Navbar } from '../../shared/components/navbar/navbar';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  imports: [CommonModule, Navbar, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  product: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
     this.inventoryService.getAll(1,12)
  .subscribe(response => {

    this.product = response.data.data;

  });
  }
}
