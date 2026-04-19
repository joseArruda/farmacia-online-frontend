import { Component } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

import { Navbar } from '../../shared/components/navbar/navbar';
import { InventoryService } from '../../core/services/inventoryService.service';
import { Product } from '../../models/product.model';
import { Cartservice } from '../../core/services/cartservice.service';

import Swal from 'sweetalert2';
import { ProductCard } from '../../shared/components/product-card/product-card';

@Component({
  selector: 'app-home',
   standalone: true,
  imports: [ NgForOf, RouterLink, NgIf, Navbar, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  product: Product[]=[];
  allProducts: Product[]=[];
  cartProduct: []=[];
  loading = false;

  currentPage: number = 1;
  lastPage: number = 1;
  pages: number[] =[];

  
    constructor(
      private inventoryService: InventoryService,
      private cartService: Cartservice,
      private route: ActivatedRoute
    ){}
  
    ngOnInit(){
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
        this.allProducts = response.data.data;
        this.currentPage = response.data.current_page;
        this.lastPage = response.data.last_page;

        this.pages = Array.from(
      {length: this.lastPage}, 
      (_, i) => i + 1
    );
    this.loading = false;
      })
    }

    addCart(id:number){
      this.cartService.addProductCart(id)
      .subscribe((data)=>{
        console.log('aqui:', data)
        this.cartProduct = data
        Swal.fire({
          icon: 'success',
          title: 'Produto adicionado ao carrinho!',
          showConfirmButton: false,
          timer: 700
        })
      })
    }

    filterProduct(text: string){
      if(!text){
        this.product = this.allProducts;
        return;
      }
        this.product = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase()))
    }
}

