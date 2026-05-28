import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InventoryService } from '../../core/services/inventoryService.service';
import { CommonModule } from '@angular/common';

import { Navbar } from '../../shared/components/navbar/navbar';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { Product } from '../../models/product.model';
import { Loader } from "../../shared/components/loader/loader";

@Component({
  selector: 'app-product',
  imports: [CommonModule, Navbar, ProductCard, Loader, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  product: Product[] = [];
  loading = true;

  currentPage: number = 1;
  lastPage: number = 1;
  pages: number[] =[];

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
     this.inventoryService.getAll(1,20)
  .subscribe(response => {
    this.product = response.data.data;
    this.loading = false;
  });

  this.route.queryParams.subscribe(params=>{
        this.currentPage = params['page'] || 1;
        this.loadProducts();
      })
  }

  goToPage(page: number){
      if(page < 1 || page > this.lastPage) return;
  }

  loadProducts(){
    this.loading = true;
    this.inventoryService.getAll(this.currentPage, 12)
    .subscribe(response=>{
      console.log('load: ',response.data);
      this.product = response.data.data;
      this.product = response.data.data;
      this.currentPage = response.data.current_page;
      this.lastPage = response.data.last_page;

      this.pages = Array.from(
    {length: this.lastPage}, 
    (_, i) => i + 1
  );
  this.loading = false;
    })
  }
}
