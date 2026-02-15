import { Component } from '@angular/core';
import { Header } from '../../modules/components/header/header';
import { FormsModule } from "@angular/forms";
import { Inventary } from '../../services/inventary.service';
import { Cartservice } from '../../services/cartservice.service';
import IProductsInterface from '../../interface/IProducts.Interface';
import { CommonModule, NgForOf } from "@angular/common";

@Component({
  selector: 'app-cart',
  imports: [Header, FormsModule, NgForOf, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  products: IProductsInterface[] = [];
  cartProducts: any[] = [];

  constructor( 
    private inventoryService: Inventary,
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
    this.inventoryService.getAll()
    .subscribe((data)=>{
      this.products = data;
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