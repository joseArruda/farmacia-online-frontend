import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { FormsModule } from "@angular/forms";
import { InventoryService } from '../../core/services/inventoryService.service';
import { Cartservice } from '../../core/services/cartservice.service';
import { Product } from '../../models/product.model';
import { CommonModule, NgForOf } from "@angular/common";

@Component({
  selector: 'app-cart',
  imports: [Navbar, FormsModule, NgForOf, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  products: Product[] = [];
  cartProducts: any[] = [];

  constructor( 
    private inventoryService: InventoryService,
    private cartService: Cartservice,
   ){}

   ngOnInit(){
    this.cartLoad();
    this.productsLoad();
   }

   cartLoad(){
    this.cartService.getCart()
    .subscribe((data)=>{
      this.cartProducts = data;
    })
   }

   productsLoad(){
    this.inventoryService.getAll(1,10)
    .subscribe((data)=>{
      this.products = data.data.data;
      console.log('Carregado no cart',data.data.data)
    })
   }

   addCart(id: number){
      this.cartService.addProductCart(id)
      .subscribe((data)=>{
        this.cartProducts = data;
      })
    }

    removeCart(id: number){
      this.cartService.removeProduct(id)
      .subscribe(()=>{
        this.cartLoad();
      })
    }
}