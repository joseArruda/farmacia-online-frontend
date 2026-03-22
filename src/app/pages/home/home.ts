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
  products: Product[]=[];
  allProducts: Product[]=[];
  cartProduct: []=[];

  currentPage: number = 1;
  lastPage: number = 1;

  
    constructor(
      private inventoryService: InventoryService,
      private cartService: Cartservice,
      private router: Router,
      private route: ActivatedRoute
    ){}
  
    ngOnInit(){
      this.route.queryParams.subscribe(params=>{
        console.log('parametros: ',params)
        this.currentPage = params['page'] || 1;
        this.loadProducts();
      })
    }

    loadProducts(){
      this.inventoryService.getAll(this.currentPage, 10)
      .subscribe(response=>{
        console.log('load: ',response.data.data);
        this.products = response.data.data;
        this.allProducts = response.data.data;
        this.currentPage = response.data.current_page;
        this.lastPage = response.data.last_page;
      })
    }

    addCart(id:number){
      this.cartService.addProductCart(id)
      .subscribe((data)=>{
        this.cartProduct = data
        Swal.fire({
          icon: 'success',
          title: 'Produto adicionado ao carrinho!',
          showConfirmButton: false,
          timer: 1050
        })
      })
    }
  
    // removeProduct(id: number){
    //   this.inventoryService.removeProduct(id).
    //   subscribe(()=>{
    //     this.products = this.products.filter(i=>i.id != id)
    //   })
    // }

    goToDetails(id: number){
      this.router.navigate(['product/details', id]);
    }

    filterProduct(text: string){
      if(!text){
        this.products = this.allProducts;
        return;
      }
        this.products = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase()))
    }
}

